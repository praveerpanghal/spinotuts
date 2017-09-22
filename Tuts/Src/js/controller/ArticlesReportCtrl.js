app.controller('ArticlesReportCtrl',['myAppURLs','JsonDataService','$route','$location', 'httpCall',
  function (myAppURLs,JsonDataService,$route,$location,httpCall) {
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

  var url=myAppURLs.GetReport;
  httpCall.GetMethod(url)               
    .then(function(result) {          
  vm.GetReportResults=JSON.parse(result.GetReportResult);
  vm.GetReportResult=vm.GetReportResults[0];
vm.GetReportResultList = vm.GetReportResults[0].ApprovedList;  
console.log(vm.GetReportResultList)    
   }, 
   function(error) { 
    console.log(error.statusText);
    $log.info(error);
  });
}]);