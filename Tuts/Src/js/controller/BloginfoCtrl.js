 app.controller('BloginfoCtrl',['$route','JsonDataService','$location','myAppURLs','httpCall','$sce',
  function ($route,JsonDataService,$location,myAppURLs,httpCall,$sce) {
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
   }, 
   function(error) { 
    console.log(error.statusText);  
    $log.info(error);
  });
  vm.to_trusted = function(html_code) {
    return $sce.trustAsHtml(html_code);
  }
}]);