app.controller('ChildNavigationCtrl', ['$route','JsonDataService','myAppURLs','$filter','$location','EncodeService','httpCall',
  function ($route,JsonDataService,myAppURLs,$filter,$location,EncodeService,httpCall) {
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

  vm.reload=function()
    {
    $route.reload();
    }
  vm.updatebtn=false;
  vm.createbtn=true;
      
  var url = myAppURLs.GetScreenRights;
  httpCall.GetMethod(url)               
    .then(function(result) {
          vm.userRights = result.GetScreenRightsResult;      
   }, 
   function(error) { 
     console.log(error.statusText); 
    $log.info(error);
  });
  var url=myAppURLs.GetParentNavigationList;
  httpCall.GetMethod(url)               
    .then(function(result) {
        vm.parentNavResult=result.GetParentNavigationListResult;
   }, 
   function(error) {
    console.log(error.statusText); 
    $log.info(error);
  });    
      var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));

  vm.copyTText = function(name){
  vm.ChildMenuItem.category_url = $filter('lowercase')(name).replace(/ +(?=)/g,'-');   
  }

vm.getTopVal=function(){
var url = myAppURLs.GetNavigationControl;
httpCall.GetMethod(url)               
.then(function(result) {    
vm.menuNav = JSON.parse(result.GetNavigationControlResult);
  }, 
   function(error) { 
    console.log(error.statusText); 
    $log.info(error);
  });
}
vm.getTopVal();
  vm.createchildnav=function(ChildMenuItem){ 
  vm.master={};
  var data = new Object();
data.category_name = ChildMenuItem.category_name;
 data.sequence_no = ChildMenuItem.sequence_no||'0';
 data.controller = ChildMenuItem.controller||'';
 data.category_url = ChildMenuItem.category_url;
 data.page_name = ChildMenuItem.page_name||'';
 data.parent_menu_id = ChildMenuItem.parent_menu_id;
 data.user_rights_id = ChildMenuItem.user_rights_id;
 data.page_title = ChildMenuItem.page_title;
 data.meta_description = ChildMenuItem.meta_description;
 data.user_id = profile.UserId;
  if(vm.ChildMenuItem.is_active){
  data.is_active = vm.ChildMenuItem.is_active;  
  }else
  {
  data.is_active ="N"
  }
  
 var url=myAppURLs.CreateChildNavigation;
   httpCall.PostMethod(url,data)               
    .then(function(result) {   
        if(result==1){
          vm.msg = 'Navigation Created successfully.';
          vm.ChildMenuItem=angular.copy(vm.master);
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
    	vm.ChildMenuItem=list;
      vm.updatebtn=true;
      vm.createbtn=false;
  }
  vm.updatechildnav=function(ChildMenuItem){  
  var data = new Object();

data.user_id = profile.UserId;
data.category_id = ChildMenuItem.category_id;
data.category_name = ChildMenuItem.category_name;
data.sequence_no = ChildMenuItem.sequence_no;
data.category_url = ChildMenuItem.category_url;
data.page_name = ChildMenuItem.page_name||'';
data.user_rights_id = ChildMenuItem.user_rights_id;
data.is_active = ChildMenuItem.is_active;
data.parent_menu_id = ChildMenuItem.parent_menu_id;
data.page_title = ChildMenuItem.page_title;
data.meta_description = ChildMenuItem.meta_description;
data.controller = ChildMenuItem.controller||'';
  var url=myAppURLs.UpdateChildNavigation;  
  httpCall.PostMethod(url,data)               
    .then(function(result) {  
        if(result==1){
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