app.controller('PostArticleCtrl', ['CatService','$filter','myAppURLs','$route','JsonDataService','EncodeService','httpCall','ButtonService',
function (CatService,$filter,myAppURLs,$route,JsonDataService,EncodeService,httpCall,ButtonService) {
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
  vm.menu = [
    ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
    ['format-block'],
    ['font'],
    ['font-size'],
    ['font-color', 'hilite-color'],
    ['remove-format'],
    ['ordered-list', 'unordered-list', 'outdent', 'indent'],
    ['left-justify', 'center-justify', 'right-justify'],
    ['code', 'quote', 'paragraph'],
    ['css-class']
  ];
  
  vm.cLists = JSON.parse(CatService.getVal());  
  var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));
  vm.urid = profile.UserRightsId;  
  vm.buttons=ButtonService.permissionbuttons(vm.urid);  
  vm.reload=function(){
    vm.article.category_id='';
    vm.article.article_name='';
    vm.article.alias_url= '';
    vm.article.article_short_desc='';
    vm.article.article_title= '';
    vm.article.article_title_short_desc= '';
    vm.article.example_name='';
    vm.article.code_desc= '';
    vm.article.example_desc='';
    vm.article.article_title_id='';
    vm.article.flag='';
    vm.buttons=ButtonService.permissionbuttons(vm.urid);  
  }
  vm.getArticles=function(){
    var url=myAppURLs.GetArticlesInformation;
    httpCall.GetMethod(url)               
    .then(function(result) {                  
      vm.particles = result.GetArticlesInformationResult;      
    }, 
    function(error) { 
      console.log(error.statusText);
      $log.info(error);
    });
  }
  vm.getArticles();
  
  vm.updatearticleinfo=function(u,status)
  {
    vm.isClicked = false;
    vm.buttons=ButtonService.permissionbuttonsupdate(vm.urid,status); 
    vm.successmessage = "";
    
    vm.open(u.alias_url);
  }
  vm.open =  function(atid,block) {  
    var url=myAppURLs.GetMainArticle;
    var data = {"alias_url":atid};
    httpCall.PostMethod(url,data)               
    .then(function(result) {            
      if(block=="model")
        {
        vm.articledetails=JSON.parse(result.GetMainArticleResult)[0];
      }    
      else
        {            
        vm.article=JSON.parse(result.GetMainArticleResult)[0];        
      }        
    }, 
    function(error) { 
      console.log(error.statusText);
      $log.info(error);
    });
  }
    
  vm.copyText = function(name){
    vm.article.alias_url = $filter('lowercase')(name).replace(/ +(?=)/g,'-');
  }
  
  vm.Articles=function(name,status,article)
  {
    var createurl= myAppURLs.PostArticle;      
    var updateurl = myAppURLs.ModifyArticles;
    
    var data = new Object();
    data.UserId= profile.UserId;
    data.article_name=article.article_name;
    data.alias_url= article.alias_url;
    data.article_short_desc=article.article_short_desc;
    data.article_title= article.article_title;
    data.article_title_short_desc= article.article_title_short_desc;
    data.example_name= article.example_name;
    data.code_desc= article.code_desc;
    data.example_desc= article.example_desc;
    if(status){
      data.article_title_id=article.article_title_id; 
      data.flag=status;
      httpCall.PostMethod(updateurl,data)               
      .then(function(result) {                          
        vm.successmessage = result; 
        vm.isClicked = true; 
        vm.getArticles();       
      }, 
      function(error) { 
        console.log(error.statusText);
        $log.err(error);
      });
    }else {
      if(name!="close"&&name!="add"){  
        data.category_id= article.category_id;         
        httpCall.PostMethod(createurl,data)               
        .then(function(result) {                
          var fields = result.PostArticleResult.split(',');          
          vm.successmessage=fields[0];
          vm.getArticles(); 
          vm.isClicked = true;
        },
        function(error) {
          console.log(error.statusText);
          $log.err(error);
        });
      }else{      
        vm.reload();
      }
    }       
    
  }
}]);	