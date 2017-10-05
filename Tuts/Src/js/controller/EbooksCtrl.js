app.controller('EbooksCtrl', ['$route','myAppURLs','JsonDataService','$location','httpCall','$log',
function ($route,myAppURLs,JsonDataService,$location,httpCall,$log) {
  var vm=this;
  vm.parent=$location.path().split('/')[1];      
  vm.category_name= ($location.path().split('/')[2]).replace(/ +(?=)/g,'-');       
  vm.category_id=$location.path().split('/')[3];  
  
  var url=myAppURLs.GetEbookChapterList;  
  var jsonurl=JsonDataService.GetJsonInfo($route.current.templateUrl);
  httpCall.GetMethod(jsonurl)               
  .then(function(result) {   
    vm.JsonVals = result;  
  }, 
  function(error) { 
    console.log(error.statusText);
    $log.info(error);
  });
  var data = new Object();  
  data.category_id = vm.category_id;
  data.chapter_id = '0';
  
  httpCall.PostMethod(url,data)               
  .then(function(result) {        
    vm.Ebooks = result;          
    vm.Ebooks=vm.Ebooks.filter(function( obj ) {
      return obj.chapter_is_approved == 'Y' && obj["chapter_description"] !== undefined ;
    });        
    if(vm.Ebooks.length<=0)
      {
      vm.Ebooksinfo="No Chapters Available";
    }
  }, 
  function(error) { 
    console.log(error.statusText);
    $log.info(error);
  });
}]);
