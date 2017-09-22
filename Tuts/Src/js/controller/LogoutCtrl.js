app.controller('LogoutCtrl',['$location',function logout($location){
	sessionStorage.clear();
	localStorage.removeItem("testObject"); 
	window.location.href = "/header";
    window.location.href = "/login";
}]);