app.controller('RegisterCtrl', ['$location','$route','myAppURLs','JsonDataService','httpCall',
function ($location,$route,myAppURLs,JsonDataService,httpCall){
  var vm=this;
  if(sessionStorage.UserInfo)
    {
    sessionStorage.clear();
    localStorage.removeItem("testObject"); 
    window.location.href = "/header";
    window.location.href = "/register";
  }
  
  var jsonurl=JsonDataService.GetJsonInfo($route.current.templateUrl);
  httpCall.GetMethod(jsonurl)               
  .then(function(result) {   
    vm.JsonVals = result;  
  }, 
  function(error) { 
    console.log(error.statusText);
    $log.info(error);
  });
  
  vm.register=function(){
		var newUser =vm.newUser;
    var url=myAppURLs.SignUp;
    var data={
      first_name: newUser.fname,
      last_name: newUser.lname,
      email_id: newUser.email,
      password: newUser.password
    };
    console.log(data)
    httpCall.PostMethod(url,data)               
    .then(function(result) {                    
      if(result.SignUpResult == 1){
        $location.path('/RegSuccess');        
      }  else
      {vm.errormessage="Email Id already exists";} 
      
    }, 
    function(error) { 
      console.log(error.statusText);
      $log.info(error);
      
    });
    
	}
}]);