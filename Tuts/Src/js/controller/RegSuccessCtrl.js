app.controller('RegSuccessCtrl',['$route','JsonDataService','httpCall',
function ($route,JsonDataService,httpCall) {
    var vm=this;
    var jsonurl=JsonDataService.GetJsonInfo($route.current.templateUrl);
    httpCall.GetMethod(jsonurl)               
        .then(function(result) {   
        vm.JsonVals = result;  
     }, 
     function(error) { 
      $log.info(error);
    });
}]);