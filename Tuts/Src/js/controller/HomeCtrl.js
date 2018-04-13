app.controller('HomeCtrl',['$scope','$route','CatService','$localStorage','$log','$rootScope','JsonDataService','$location','myAppURLs','httpCall',
 function ($scope,$route,CatService,$localStorage,$log,$rootScope,JsonDataService,$location,myAppURLs,httpCall) {
	var vm=this;
	
	//vm.cLists = JSON.parse(CatService.getVal());	
	//console.log(vm.cLists)
vm.service = CatService;
 $scope.$watch('vm.service.getVal()', function(newVal) {
	vm.cLists = JSON.parse(newVal);	
 });

	vm.redirect=function(r){
		var key_s = angular.uppercase(r);
	
		angular.forEach(vm.cLists, function(value, key){
			var key_c = angular.uppercase(value.category_name);
	
			if(key_c == key_s){
				$location.path('tutorials/'+angular.lowercase(key_s)+'/'+value.category_id);
			}
	   });
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
}]);