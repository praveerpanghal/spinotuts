app.controller('HeaderCtrl',['$http','myAppURLs','$log','CatService','EncodeService','httpCall','$rootScope',
function ($http,myAppURLs,$log,CatService,EncodeService,httpCall,$rootScope) {
  var vm=this;  
  vm.isLoggedIn=false;
  
  $rootScope.$on("CallParentMethod", function(){
    vm.loaddata();
  });
  vm.loaddata=function(){
    if(sessionStorage.UserInfo){
      var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));
      vm.isLoggedIn= true;
      vm.uinfo = profile.UserId;        
      var data = { "userid": vm.uinfo };
      var url=myAppURLs.AuthorizedMenu;
      httpCall.PostMethod(url,data)               
      .then(function(result) {   
        if (result.AuthorizedMenuResult!=='') {
          vm.PostDataResponse = JSON.parse(result.AuthorizedMenuResult);
          vm.topnav= vm.PostDataResponse[0].topNav;
          vm.menu= vm.PostDataResponse[0].mainNav;
          $rootScope.images.headerLogo=vm.PostDataResponse[0].headerLogo;
          $rootScope.images.footerLogo=vm.PostDataResponse[0].footerLogo;
          $rootScope.images.spinoLogo=vm.PostDataResponse[0].spinoLogo;   
          $rootScope.images.banner=vm.PostDataResponse[0].banner; 

          var q = vm.PostDataResponse[0].mainNav;
          var name=vm.PostDataResponse[0].loggedUser;
          var pic=vm.PostDataResponse[0].profile_pic;
          $(function(){
            $('#bs-example-navbar-collapse-1 li a').each(function() {      
              var text = $(this).text();
              $(this).text(text.replace('Username', name)); 
            });            
            $(".headnavimg").css({ lineHeight:'25px', padding:'5px' });
            if(pic){
              $(".headnavimg").prepend('<span class="userWizard"><img id="theImg" src='+pic+' /></span>');
            }else{      
              $(".headnavimg").prepend('<span class="userWizard"><img id="theImg" src="../images/profileimg.png" /></span>');
            }           
            
            vm.code();
            
          });
          
          CatService.update(vm.PostDataResponse[0].mainNav[0].childList);
        } 
        else {
          $log.info(data);
        }
      }, 
      function(error) { 
        $log.info(error);
        
      });      
    }
    else{
      
      var url=myAppURLs.GeneralMenu;
      httpCall.GetMethod(url)               
      .then(function(result) {    
        if (result.GeneralMenuResult!=='') {       
          vm.PostDataResponse = JSON.parse(result.GeneralMenuResult);
          vm.topnav =vm.PostDataResponse[0].topNav;
          vm.topnav = $.grep(vm.topnav, function(e) { return e.H_menu_id!=24 });
          vm.menu= vm.PostDataResponse[0].mainNav;
          $rootScope.images.headerLogo=vm.PostDataResponse[0].headerLogo;
          $rootScope.images.footerLogo=vm.PostDataResponse[0].footerLogo;
          $rootScope.images.spinoLogo=vm.PostDataResponse[0].spinoLogo;   
          $rootScope.images.banner=vm.PostDataResponse[0].banner;   
          $(function(){
            vm.code();
          });          
          CatService.update(vm.PostDataResponse[0].mainNav[0].childList);          
        } 
        else {
          $log.info(result);
        }        
      }, 
      function(error) { 
        $log.info(error);
      });
    }
  }
  vm.loaddata();
  vm.code=function(){ 
    if($(window).width() <= 1000){
      $("#bs-example-navbar-collapse-1 li").click(function(){      
        $(this).attr("data-toggle","collapse");
        $(this).attr("data-target","#bs-example-navbar-collapse-1");        
      });
      $("#bs-example-navbar-collapse-11 li").click(function(){
        $(this).attr("data-toggle","collapse");
        $(this).attr("data-target","#bs-example-navbar-collapse-11");        
      });
    }	
  } 
}]);
