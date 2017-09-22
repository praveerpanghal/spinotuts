app.controller('EbookInfoCtrl', ['$route','$localStorage','myAppURLs','JsonDataService','$location','$sanitize','$sce','httpCall',
function ($route,$localStorage,myAppURLs,JsonDataService,$location,$sanitize,$sce,httpCall) {
  var vm=this;
  vm.parent=$location.path().split('/')[1];
  vm.categoryname=$location.path().split('/')[2];
  vm.articleid=$location.path().split('/')[3];
  vm.ebooktitle=$location.path().split('/')[4];
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
  
  var data = {"category_id":vm.articleid};  
  httpCall.PostMethod(url,data)               
  .then(function(result) {                  
    
    vm.Ebooks = result;
    vm.Ebooks=vm.Ebooks.filter(function( obj ) {
      return obj.chapter_is_approved == 'Y' && obj["chapter_description"] !== undefined ;
    });
    vm.EbookInfo= vm.Ebooks.filter(function( obj ) {
      return obj.alias_url == vm.ebooktitle;
    });
    vm.EbookInfo=vm.EbookInfo[0];       
    vm.Chindex =vm.Ebooks.length-vm.Ebooks.map(function(e) { return e.alias_url; }).indexOf(vm.ebooktitle)-1;   
    
  }, 
  function(error) {
    console.log(error.statusText);
    $log.info(error);    
  });
  
  vm.to_trusted = function(html_code) {
    return $sce.trustAsHtml(html_code);
  }
  
  vm.pre=function(id){
    var index =vm.Ebooks.map(function(e) { return e.alias_url; }).indexOf(id);
    var preurl='/'+vm.parent+'/'+vm.categoryname+'/'+vm.articleid+'/'+vm.Ebooks[index+1].alias_url;
    $location.path(preurl);
  }
  vm.next=function(id){ 
    var index =vm.Ebooks.map(function(e) { return e.alias_url; }).indexOf(id);
    var nxturl='/'+vm.parent+'/'+vm.categoryname+'/'+vm.articleid+'/'+vm.Ebooks[index-1].alias_url;
    $location.path(nxturl);
  }
  
}]);
