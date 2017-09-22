app.controller('ApprovedArticleListCtrl', ['$scope','$http','$localStorage','myAppURLs','$location',
    '$rootScope','CatService','ArticlesService','JsonDataService','$route','MenuService','$filter','$timeout','LogService','httpCall',
    function ($scope,$http,$localStorage,myAppURLs,$location,
    $rootScope,CatService,ArticlesService,JsonDataService,$route,MenuService,$filter,$timeout,LogService,httpCall) {
      var jsonurl=JsonDataService.GetJsonInfo($route.current.templateUrl);
      httpCall.GetMethod(jsonurl)               
          .then(function(response) {   
          $scope.JsonVals = response;  
       }, 
       function(error) { 
        $log.info(error);
      });

      $scope.cLists = JSON.parse(localStorage["cList"]);
  var url=myAppURLs.GetArticlesInformation;
   ArticlesService.GetAllArticles(url)               
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

     $scope.selection=[];
  $scope.MultipleSelection = function MultipleSelection(vals) {
     var idx = $scope.selection.indexOf(vals);
      if (idx > -1) {
       $scope.selection.splice(idx, 1);
     }
     else {
       $scope.selection.push(vals);
     }
};

$scope.delete=function(){
var data={"article_ids":$scope.selection.toString(),"user_id":sessionStorage.UserInfo};
    var url= myAppURLs.RemoveArticles;
            ArticlesService.DeleteArticles(url,data)               
      .then(function(data) {                  
        if(data!=='') {
        location.reload();
        } 
      else {
       $log.info(data);
     }
   }, 
   function(error) { 
    $log.info(error);
  });
      
}
$scope.disapprove=function(){
      var data = {"article_title_id": $scope.selection.toString(),"user_id":sessionStorage.UserInfo}; 
          var url= myAppURLs.DisapproveArticle;
ArticlesService.DisapproveArticle(url,data)               
      .then(function(data) { 
      //console.log(data);                 
  if(data.DisapproveArticleResult!=='') {
        if(data.DisapproveArticleResult==1){                
                $scope.successmessage="Article has been disapproveed successfully.";
                $scope.articleaprove = '';
                sessionStorage.successmessage=$scope.successmessage;
                alert($scope.successmessage);
               location.reload();
            }
        } 
      else {
       $log.info(data);
     }
   }, 
   function(error) { 
    $log.info(error);
  });     
} 
}]);