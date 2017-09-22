app.controller('GetInterviewQuestionsCtrl', ['$route','$location','$log','myAppURLs','JsonDataService','httpCall',
  function ($route,$location,$log,myAppURLs,JsonDataService,httpCall) {
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
  vm.category_id= $location.path().split('/')[3];
  if(vm.category_id==132){vm.category_id=0;}  
  var url = myAppURLs.GetInterviewQuestionsList;
  var data = new Object();  
  data.category_id =vm.category_id;
  console.log(data)
  httpCall.PostMethod(url,data).then(function(result){    
      vm.questions = result.filter(function( obj ) {
        return obj.is_approved == 'Y';
        });
      if(vm.questions=='')
        vm.no_record = 'Questions not found';
          
  },function(error){
    console.log(error.statusText);
    $log.info(error);
  }); 
}]);