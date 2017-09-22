app.controller('ApproveArticleCtrl',['$scope','$http','$localStorage','myAppURLs','$rootScope','CatService','ArticlesService','$location','$route','JsonDataService','httpCall', function ($scope,$http,$localStorage,myAppURLs,$rootScope,CatService,ArticlesService,$location,$route,JsonDataService,httpCall) {

  var jsonurl=JsonDataService.GetJsonInfo($route.current.templateUrl);
  httpCall.GetMethod(jsonurl)               
      .then(function(response) {   
      $scope.JsonVals = response;  
   }, 
   function(error) { 
    $log.info(error);
  });


if(sessionStorage.UserName){
$scope.cLists = JSON.parse(localStorage["cList"]);
    $scope.today = new Date();
           var url=myAppURLs.GetArticlesInformation;
		   ArticlesService.ArticleList(url)               
    	.then(function(data) {                  
      	if(data.GetArticlesInformationResult!=='') {
        $scope.articles = data.GetArticlesInformationResult;
        } 
      else {
       $log.info(data);
     }

   }, 
   function(error) { 
    $log.info(error);

  });
}else{

      $location.path('/Login');

    }

}]);

