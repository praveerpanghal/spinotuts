app.controller('ForgotCtrl',['$location','$route','JsonDataService','myAppURLs','httpCall',
  function($location,$route,JsonDataService,myAppURLs,httpCall){
    var vm=this;
    var jsonurl=JsonDataService.GetJsonInfo($route.current.templateUrl);
    httpCall.GetMethod(jsonurl)               
        .then(function(result) {   
        vm.JsonVals = result;  
     }, 
     function(error) { 
      $log.info(error);
    });

	vm.forgot=function(){		
    var data = {"login_name" : vm.user.email};
    var url= myAppURLs.ForGotPwd;   
		
    httpCall.PostMethod(url,data).then(function(result){
      if(result.ForgotPasswordResult==1){
        $location.path('/ForgotSuccess');
      }
      else if(result.ForgotPasswordResult==-1){
        vm.error = 'username or email id does not exists';
      }
    },
     function(error) { 
      $log.info(error);
  });
  
	}

}]);