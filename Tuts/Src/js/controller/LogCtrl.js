
app.controller('LogCtrl', ['myAppURLs','$route','JsonDataService','httpCall',
function (myAppURLs,$route,JsonDataService,httpCall) {
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
  
  var url = myAppURLs.GetExceptionLog;
  httpCall.GetMethod(url)               
  .then(function(result) {                        
      vm.data =result.GetExceptionLogResult;       
  }, 
  function(error) { 
    console.log(error.statusText);
    $log.info(error);
    
  });            
  
}]);