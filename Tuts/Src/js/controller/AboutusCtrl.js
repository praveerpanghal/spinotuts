app.controller('AboutusCtrl',['$route','JsonDataService', 
function ($route,JsonDataService) {
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