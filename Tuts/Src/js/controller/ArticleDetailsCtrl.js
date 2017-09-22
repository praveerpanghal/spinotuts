app.controller('ArticleDetailsCtrl', ['myAppURLs','$log','$route','JsonDataService','$location','EncodeService','httpCall',
function (myAppURLs,$log,$route,JsonDataService,$location,EncodeService,httpCall) 
{
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
  vm.parent=$location.path().split('/')[1];
  vm.categoryname=$location.path().split('/')[2];
  vm.categoryid=$location.path().split('/')[3];
  vm.article = $location.path().split('/')[4];

  vm.getdata=function(){
    var url=myAppURLs.GetMainArticle;     
    var data = {"alias_url":vm.article };
    httpCall.PostMethod(url,data)               
    .then(function(result) {       
      vm.articledetails =JSON.parse(result.GetMainArticleResult);      
      vm.comments=vm.articledetails[0].CommentsList;
    }, 
    function(error) { 
      console.log(error.statusText);
      $log.info(error);
    });
  }
  
  if(vm.parent=="tutorials"){
    vm.flag=0;
  }else{
    vm.flag=1;
  }
  
  var url=myAppURLs.GetApprovedArticleList;
  var category_url=0;

  /*articles form previous and next tutorials section begin*/
  vm.articlewithcategory=function(article,category,eve){
    var data = {"category_url":category};
    httpCall.PostMethod(url,data)               
    .then(function(result) {
      vm.articles = result.GetApprovedArticleListResult;      
      var index =vm.articles.map(function(e) { return e.article_title_id; }).indexOf(article);
      if(eve=="previous"){
        var preurl='/'+vm.parent+'/'+vm.articles[index-1].category_name.toLowerCase()+'/'+vm.categoryid+'/'+vm.articles[index-1].alias_url;
        $location.path(preurl);
      }else{
        var nxturl='/'+vm.parent+'/'+vm.articles[index+1].category_name.toLowerCase()+'/'+vm.categoryid+'/'+vm.articles[index+1].alias_url;
        $location.path(nxturl);
      }      
    }, 
    function(error) {
      console.log(error.statusText); 
      $log.info(error);
    });
  }
  /*articles form previous and next tutorials section end*/

  /*articles form previous and next latest articles section begin*/
  vm.articlewithoutcategory=function(article,eve){
    var data = {"category_url":category_url};
    httpCall.PostMethod(url,data)               
    .then(function(result) {      
      vm.articles = result.GetApprovedArticleListResult;
      var index =vm.articles.map(function(e) { return e.article_title_id; }).indexOf(article);            
      if(eve=="previous"){
      var preurl='/'+vm.parent+'/'+vm.articles[index-1].category_name.toLowerCase()+'/'+vm.articles[index-1].category_id+'/'+vm.articles[index-1].alias_url;      
      $location.path(preurl);
      }
      else{
        var nxturl='/'+vm.parent+'/'+vm.articles[index+1].category_name.toLowerCase()+'/'+vm.articles[index+1].category_id+'/'+vm.articles[index+1].alias_url;
      $location.path(nxturl);
      }      
    }, 
    function(error) { 
      console.log(error.statusText);
      $log.info(error);
    });
  }
  /*articles form previous and next latest articles section end*/

/*comments section begin*/
  vm.isLoggedIn=false;  
  if(sessionStorage.UserInfo){  
    vm.isLoggedIn= true;
    var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));
  }

  vm.submit_comment=function(comment){    
    vm.master = {};
    //vm.comment=comment;
    var data = new Object();
    data.UserId=profile.UserId;
    data.article_title_id=comment.article_title_id;
    data.comment_description=comment.discription;    
    var url=myAppURLs.PostComments;
    httpCall.PostMethod(url,data)               
    .then(function(result) {                        
      vm.comment=angular.copy(vm.master);      
      vm.getdata();        
    }, 
    function(error) { 
      console.log(error.statusText);
      $log.info(error);
    });
  }
  /*comments section end*/  
  vm.getdata();
}]);