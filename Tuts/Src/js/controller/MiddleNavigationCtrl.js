app.controller('MiddleNavigationCtrl',['$route','JsonDataService','myAppURLs','$filter','EncodeService','httpCall','$rootScope',
 function ($route,JsonDataService,myAppURLs,$filter,EncodeService,httpCall,$rootScope) {
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
  var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));
  vm.reload=function()
    {
    $route.reload();
    }
  vm.updatebtn=false;
  vm.createbtn=true;
      
  var url = myAppURLs.GetScreenRights;
  httpCall.GetMethod(url)               
    .then(function(result) {
          vm.userRights =result.GetScreenRightsResult;
   }, 
   function(error) { 
    console.log(error.statusText);
    $log.info(error);
  });
    
  var url = myAppURLs.GetLookup;
  var data = {"lookup_id":"1"};
  httpCall.PostMethod(url,data).then(function(result){  
    vm.menuTypes =result;  
  }, 
  function(error) { 
   console.log(error.statusText);
   $log.info(error);
 });
  vm.copyTText = function(name){
  vm.MidMenuItem.page_url = $filter('lowercase')(name).replace(/ +(?=)/g,'-');   
  }
vm.getTopVal=function(){
var url = myAppURLs.GetNavigationControl;
httpCall.GetMethod(url)               
.then(function(result) {    
vm.menuNav = JSON.parse(result.GetNavigationControlResult);
  }, 
   function(error) { 
    $log.info(error);
  });
}
vm.getTopVal();
  vm.createmidnav=function(MidMenuItem){  
  vm.master={};
  var data = new Object();
  data.menu_name = MidMenuItem.menu_name;
  data.page_url = MidMenuItem.page_url;
  data.controller = MidMenuItem.controller||'';
  data.lookup_value_id =MidMenuItem.lookup_value_id;
  data.user_rights_id = MidMenuItem.user_rights_id;
  data.page_title = MidMenuItem.page_title;
  data.meta_description = MidMenuItem.meta_description;
  data.page_name = MidMenuItem.page_name||'';
  data.sequence_no =MidMenuItem.sequence_no||'';
  data.header = "2";
  data.user_id = profile.UserId;
  if(MidMenuItem.is_active){
  data.is_active = MidMenuItem.is_active;  
  }else
  {
  data.is_active ="N"
  }
  var url=myAppURLs.CreateTopNavigation;
  httpCall.PostMethod(url,data)               
    .then(function(result) {    
        if(result==1){
          $rootScope.demoroute();
        $rootScope.update();
          vm.msg = 'Navigation Created successfully.';
          vm.MidMenuItem=angular.copy(vm.master);
          vm.getTopVal();          
        }
        else if(result == -1){
            vm.msg = "sequence number already exists , please try another !";            
        }
   }, 
   function(error) {   
     console.log(error.statusText);
    $log.info(error);
  });

  }
  vm.updatearticleinfo=function(list){ 
    vm.isClicked = false;	
    vm.msg ="";   	
    	vm.MidMenuItem=list;
      vm.updatebtn=true;
      vm.createbtn=false;
  }
  vm.updatemidnav=function(MidMenuItem){  
  var data = new Object();
  data.user_id = profile.UserId;
  data.menu_id = MidMenuItem.menu_id;
  data.menu_name =MidMenuItem.menu_name;
  data.page_url = MidMenuItem.page_url;
  data.sequence_no = MidMenuItem.sequence_no;
  data.page_name = MidMenuItem.page_name;
  data.lookup_value_id =MidMenuItem.lookup_value_id;
  data.user_rights_id = MidMenuItem.user_rights_id;
  data.is_active = MidMenuItem.is_active;
  data.page_title = MidMenuItem.page_title;
  data.meta_description = MidMenuItem.meta_description;
  data.controller =MidMenuItem.controller||'';
  var url=myAppURLs.UpdateTopNavigation;  
  httpCall.PostMethod(url,data)               
    .then(function(result) {    
        if(result==1){
          $rootScope.demoroute();
        $rootScope.update();
          vm.msg="navigation updated successfully";  
          vm.isClicked = true;	
        }else if(result==-1){
          vm.msg = "sequence number already exists , please try another !";          
        }
   }, 
   function(error) {
    console.log(error.statusText); 
    $log.info(error);
  });
}
}]);