
app.controller('LoginCtrl',['$location','$http','myAppURLs','$route','JsonDataService','EncodeService','httpCall',
  function ($location,$http,myAppURLs,$route,JsonDataService,EncodeService,httpCall){
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
	vm.login = function(user){    
         $http.post('/authenticate', user)
      .success(function (data, status, headers, config) {        
        var encodedProfile = data.token.split('.')[1];        
        var profile = JSON.parse(EncodeService.encodelogval(encodedProfile));
        if(profile.ReturnVal==1){
        sessionStorage.UserInfo = encodedProfile;
        
        window.location.href = "/home"; 
        }
         else if(profile.ReturnVal == -1){
                vm.error='EmailID does not exists';
                $location.path('/login');
            }
            else if(profile.ReturnVal== -2){
                vm.error=' Invalid password';
                $location.path('/login');
            } 
            else if(profile.ReturnVal == -3){
                vm.error=' User is not active , please contact to administrator';
                $location.path('/login');
            } 
      
      })
      .error(function (data, status, headers, config) {        
        delete $window.sessionStorage.token;
        vm.error = 'Error: Invalid user or password';        
      });
	}

}]);