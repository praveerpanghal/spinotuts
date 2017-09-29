app.controller('NavigationCtrl',['$route','JsonDataService','myAppURLs','$filter','$location','EncodeService','httpCall',
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
    vm.menuTypes = result;  
  }, 
  function(error) { 
   console.log(error.statusText);
   $log.info(error);
 });

  vm.copyTText = function(name){    
    vm.TopMenuItem.page_url= $filter('lowercase')(name).replace(/ +(?=)/g,'-');    
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
  vm.createtopnav=function(TopMenuItem){  
  vm.master={};
  var data = new Object();
  data.menu_name = TopMenuItem.menu_name;
  data.page_url = TopMenuItem.page_url;
  data.controller = TopMenuItem.controller||'';
  data.lookup_value_id =TopMenuItem.lookup_value_id;
  data.user_rights_id = TopMenuItem.user_rights_id;
  data.page_title = TopMenuItem.page_title;
  data.meta_description = TopMenuItem.meta_description;
  data.page_name = TopMenuItem.page_name||'';
  data.sequence_no =TopMenuItem.sequence_no||'';
  data.header = "1";
  data.user_id = profile.UserId;
  if(TopMenuItem.is_active){
  data.is_active = TopMenuItem.is_active;  
  }else
  {
  data.is_active ="N"
  }  
  var url=myAppURLs.CreateTopNavigation;
  httpCall.PostMethod(url,data)               
    .then(function(result) {    
        if(result==1){
          vm.msg = 'Navigation Created successfully.';
          vm.TopMenuItem=angular.copy(vm.master);
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
    	vm.TopMenuItem=list;
      vm.updatebtn=true;
      vm.createbtn=false;
  }
  vm.updatetopnav=function(TopMenuItem){  
  var data = new Object();
  data.user_id = profile.UserId;
  data.menu_id =TopMenuItem.menu_id;
  data.menu_name = TopMenuItem.menu_name;
  data.page_url = TopMenuItem.page_url;
  data.sequence_no = TopMenuItem.sequence_no;
  data.page_name = TopMenuItem.page_name;
  data.page_title = TopMenuItem.page_title;
  data.meta_description = TopMenuItem.meta_description;
  data.lookup_value_id = TopMenuItem.lookup_value_id;
  data.user_rights_id = TopMenuItem.user_rights_id;
  data.is_active = TopMenuItem.is_active;
  data.controller = TopMenuItem.controller||'';  
  var url=myAppURLs.UpdateTopNavigation;
  httpCall.PostMethod(url,data)               
    .then(function(result) {    
        if(result==1){
          vm.msg="navigation updated successfully";      
        }else if(result==-1){
          vm.msg = "sequence number already exists , please try another !";          
        }  
        vm.isClicked = true;         
   }, 
   function(error) { 
    console.log(error.statusText);
    $log.info(error);
  });

}
}]);