app.controller('PostArticleCtrl', ['CatService','$filter','myAppURLs','$route','JsonDataService','EncodeService','httpCall','$log', '$rootScope',
function (CatService,$filter,myAppURLs,$route,JsonDataService,EncodeService,httpCall,$log,$rootScope) {
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
  vm.BtnShow=true;
  //vm.buttonnavi=true;  
  vm.cLists = JSON.parse(CatService.getVal());  
  var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));
  vm.urid = profile.UserRightsId;  
    
  vm.reload=function(){
    vm.article=[];
    vm.isClicked = false;
    vm.showmee=false; 
    vm.successmessage = "";
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
  }

  vm.selectedItemChanged=function(id){
    var filtered_json = find_in_object(JSON.parse(JSON.stringify(vm.bookslists)), {category_id: id});
    function find_in_object(my_object, my_criteria){
      return my_object.filter(function(obj) {
        return Object.keys(my_criteria).every(function(c) {
          return obj[c] == my_criteria[c];
        });
      });
    }
    if(filtered_json.length>0){  
      vm.ebookpostch.sequence_no=filtered_json[0].sequence_no+1;
    }
    else
    {
      vm.ebookpostch.sequence_no=1; 
    }
  }
  vm.successmessage = "" ;
  vm.submit_btn = true;
  
  vm.selection=[];
    vm.MultipleSelection = function(vals) {
         var idx = vm.selection.indexOf(vals);
    if(idx=='0'){
      vm.buttonnavi=true;
    }
          if (idx > -1) {      
             vm.selection.splice(idx, 1);
         }
         else {
             vm.selection.push(vals);
      vm.buttonnavi=false;
         }
  }

  vm.getArticles=function(){
    var url=myAppURLs.GetArticlesInformation;
    httpCall.GetMethod(url)               
    .then(function(result) {                  
      vm.particles = result.GetArticlesInformationResult;  
      vm.selection=[];
      vm.buttonnavi=true;
      vm.successmessage = "";
     // console.log(vm.particles)    
    }, 
    function(error) { 
      console.log(error.statusText);
      $log.info(error);
    });
  }
  vm.getArticles();
  
  /* update_iq_info  begin*/
  vm.update_iq_info = function(uiq,status){
    $(".seqnum").prop('disabled', false);
    vm.isClicked = false;
    vm.showmee=true;
    vm.BtnShow=false;
    vm.successmessage = "";
    vm.article= angular.copy(uiq); 
  }
  /*update_iq_info end*/
    
  vm.copyText = function(name){
    vm.article.alias_url = $filter('lowercase')(name).replace(/ +(?=)/g,'-');
  }
  vm.changestatus=function(status)
  {    
    var article=[];
    article.article_name='';
    article.alias_url= '';
    article.article_short_desc='';
    article.article_title= '';
    article.article_title_short_desc='';
    article.example_name= '';
    article.code_desc='';
    article.example_desc='';
    article.article_title_id=  vm.selection.toString();
    article.flag=status;    
    article.category_id='';       
    vm.Articles(article,status)
  }
  vm.Articles=function(article,status)
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
        $rootScope.demoroute();
        $rootScope.update();
      }, 
      function(error) { 
        console.log(error.statusText);
        $log.err(error);
      });
    }else {
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
    }       
    
  }
}]);	