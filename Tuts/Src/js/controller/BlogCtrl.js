app.controller('BlogCtrl',['$route','JsonDataService','myAppURLs','$location','httpCall', 
  function ($route,JsonDataService,myAppURLs,$location,httpCall) {
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
vm.blogpath=$location.path().split('/')[1];
      var url=myAppURLs.GetBlogs;
    httpCall.GetMethod(url)               
      .then(function(result) {        
        vm.blogslists = result.GetBlogsResult;        
   }, 
   function(error) { 
    console.log(error.statusText);
    $log.info(error);
  });	
}]);