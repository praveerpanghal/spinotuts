 app.controller('BloginfoCtrl',['$route','JsonDataService','$location','myAppURLs','httpCall', 
  function ($route,JsonDataService,$location,myAppURLs,httpCall) {
    var vm=this;
    var jsonurl=JsonDataService.GetJsonInfo($route.current.templateUrl);
    httpCall.GetMethod(jsonurl)               
        .then(function(result) {   
        vm.JsonVals = result;  
     }, 
     function(error) { 
      console.log(error.statusText);
      $log.info(error);
    });	
var url=myAppURLs.GetSingleBlog;
var data = {"alias_url":$location.path().split('/')[2]};
httpCall.PostMethod(url,data)               
      .then(function(result) {
      vm.singlebloginfo=result[0];
      console.log(vm.singlebloginfo);
   }, 
   function(error) { 
    console.log(error.statusText);  
    $log.info(error);
  });
}]);