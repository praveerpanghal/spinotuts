app.controller('AddBlogCtrl',['$route','JsonDataService','myAppURLs', '$filter','EncodeService','httpCall','$log','$sce',
function ($route,JsonDataService,myAppURLs,$filter,EncodeService,httpCall,$log,$sce) {
  var vm=this;
  var jsonurl=JsonDataService.GetJsonInfo($route.current.templateUrl);
  httpCall.GetMethod(jsonurl)               
  .then(function(result) {   
    vm.JsonVals = result;  
  }, 
  function(error) { 
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
  vm.to_trusted = function(html_code) {
    return $sce.trustAsHtml(html_code);
  }
  var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));
  vm.loaddata=function(){
    var data = new Object();
    data.user_id=profile.UserId;     
    var url=myAppURLs.GetMyBlog;      
    httpCall.PostMethod(url,data)               
    .then(function(result) {              
        vm.Blogs = result.GetMyBlogResult;      
    }, 
    function(error) { 
      $log.info(error);
    });
  }
  vm.loaddata();
  vm.successmessage = "";
  vm.sub_but=true;
  vm.cls_but=true;     
  vm.update_but=false;
  vm.add_but=false;
  vm.edit_but=false;
  vm.del_but=false;
  vm.isClicked=false;
  vm.submit_blog=function(blogpostlist){
    vm.isClicked=true;       
    
    var data = new Object();
    data.UserId=profile.UserId;
    data.blog_title=blogpostlist.blog_title;
    data.alias_url=blogpostlist.alias_url;
    data.blog_description=blogpostlist.description;      
    
    var url=myAppURLs.PostBlog;      
    httpCall.PostMethod(url,data)               
    .then(function(result) {
     
        var fields =result.split(',');
        var pid=fields[1];
        if(pid!=null){
          vm.blogpost.blog_id=pid;
        }
        vm.successmessage = fields[0];
        vm.loaddata();
        $rootScope.demoroute();
        $rootScope.update();     
    }, 
    function(error) { 
      $log.info(error);
    });
  }  
  vm.update_info=function(bid){
    vm.isClicked = false;
    vm.successmessage ='';
    vm.blogpost=[];
    vm.add_but=true;      
    vm.update_but=true;
    vm.del_but=true;
    vm.sub_but=false;      
    vm.isClicked=false;
    vm.blogpost.blog_id=bid.blog_id;
    vm.blogpost.blog_title=bid.blog_title;
    vm.blogpost.alias_url=bid.alias_url;
    vm.blogpost.description=bid.blog_description;
  }
  vm.update_blog=function (blogpost,UpVal){        
    var data = new Object();
    data.UserId=profile.UserId;
    data.blog_id=blogpost.blog_id;
    data.blog_title=blogpost.blog_title;
    data.alias_url=blogpost.alias_url;
    data.blog_description=blogpost.description;
    data.flag=UpVal;
    vm.isClicked = true;          
    var url=myAppURLs.ModifyMyBlog;
    httpCall.PostMethod(url,data)              
    .then(function(result) {              
        vm.successmessage = result;
        vm.loaddata();
      
    }, 
    function(error) { 
      
      $log.info(error);
    });
  }
  vm.copyTText = function(name){
    vm.blogpost.alias_url = $filter('lowercase')(name).replace(/ +(?=)/g,'-');   
  }
  vm.reload=function()
  {
    vm.blogpost.blog_id='';
    vm.blogpost.blog_title='';
    vm.blogpost.alias_url='';
    vm.blogpost.description='';
    

    //$route.reload();
  }
  
  vm.open=function(blogid){
    vm.BlogInfo= vm.Blogs.filter(function( obj ) {
      return obj.blog_id == blogid;
    });
    vm.BlogInfo=vm.BlogInfo[0];
    console.log(vm.BlogInfo.blog_description);
  }
  
}]);