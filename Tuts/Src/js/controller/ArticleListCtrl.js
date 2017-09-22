app.controller('ArticleListCtrl',['$route','myAppURLs','$log','JsonDataService','$location', 'httpCall',
function ($route,myAppURLs,$log,JsonDataService,$location,httpCall){
  var vm=this;
  vm.urlparent=$location.path().split('/')[1];
  vm.urlcategory=$location.path().split('/')[2];

  if(!vm.urlcategory){
    vm.urlcategory='0';  
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

  var url=myAppURLs.GetApprovedArticleList;
  var data = {"category_url":vm.urlcategory};
    httpCall.PostMethod(url,data)               
    .then(function(result) {
      vm.articles = result.GetApprovedArticleListResult;
    }, 
    function(error) { 
      console.log(error.statusText);
      $log.info(error);
    });  
}]);