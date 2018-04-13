app.controller('SubChildNavigationCtrl',['$route','JsonDataService','myAppURLs','$filter','$location','EncodeService','httpCall','$rootScope',
function ($route,JsonDataService,myAppURLs,$filter,$location,EncodeService,httpCall,$rootScope) {
  var vm=this;
  var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));
  var jsonurl=JsonDataService.GetJsonInfo($route.current.templateUrl);
  httpCall.GetMethod(jsonurl)               
  .then(function(result) {   
    vm.JsonVals = result;  
  }, 
  function(error) { 
    $log.info(error);
  });
  vm.createbtn=true;
  vm.reload=function()
  {
    $route.reload();
  }
  
  var url = myAppURLs.GetScreenRights;
  httpCall.GetMethod(url)               
  .then(function(result) {    
    vm.userRights = result.GetScreenRightsResult;    
  }, 
  function(error) { 
    $log.info(error);
  });
  var url=myAppURLs.GetParentNavigationList;
  httpCall.GetMethod(url)               
  .then(function(result) {    
      vm.parentNavResult=result.GetParentNavigationListResult;      
  }, 
  function(error) {
    $log.info(error);
  });
  
  vm.getSubchildVal=function(){    
    var url = myAppURLs.GetChildSubNavigation;
    httpCall.GetMethod(url)               
    .then(function(result) {    
      vm.ChildSubNavigationLists = result.GetChildSubNavigationResult;
      
    }, 
    function(error) { 
      $log.info(error);
    });
  }
  vm.getSubchildVal();
  
  
  vm.getparentid=function(val){
    
    var url = myAppURLs.fetchcategory;
    var data = new Object();  
    data.parent_menu_id = val;
    
    httpCall.PostMethod(url,data).
    then(function(result){
      vm.ChildLists = result.fetchcategoryResult;       
    },
    function(error){
      $log.info(error);
    });
  }
  vm.copyTText = function(name){
    vm.SubChildMenuItem.sub_category_url = $filter('lowercase')(name).replace(/ +(?=)/g,'-');   
  }
  
  vm.createsubchildnav=function(SubChildMenuItem){    
    vm.master={};
    var url=myAppURLs.CreateChildSubNavigation;
    var data = new Object();  
    data.sub_category_name = SubChildMenuItem.sub_category_name;
    data.sub_category_url = SubChildMenuItem.sub_category_url;
    data.page_name = SubChildMenuItem.page_name;
    data.controller =SubChildMenuItem.sub_category_controller;
    data.category_id =SubChildMenuItem.category_id;
    data.user_rights_id =SubChildMenuItem.user_rights_id;
    data.sequence_no = SubChildMenuItem.sequence_no;
    data.page_title = SubChildMenuItem.page_title;
    data.meta_description = SubChildMenuItem.meta_description;
    data.user_id = profile.UserId;
    
    httpCall.PostMethod(url,data).
    then(function(result){      
      if(result==1){
        $rootScope.demoroute();
        $rootScope.update();
        vm.msg = 'Navigation Created successfully.';
        vm.SubChildMenuItem=angular.copy(vm.master);
        vm.getSubchildVal();
      }
    },
    function(error){      
      $log.info(error);      
    });
  }
  
  vm.updatearticleinfo=function(list){
    vm.isClicked = false;	
    vm.msg='';
    vm.SubChildMenuItem=list;
    vm.updatebtn=true;
    vm.createbtn=false;
  }
  
  vm.updatechildnav=function(SubChildMenuItem){
    vm.master={};
    var data = new Object();  
    data.sub_category_id=SubChildMenuItem.sub_category_id;
    data.sub_category_name=SubChildMenuItem.sub_category_name;
    data.sub_category_url=SubChildMenuItem.sub_category_url;
    data.page_name =SubChildMenuItem.page_name;
    data.controller=SubChildMenuItem.sub_category_controller;
    data.category_id=SubChildMenuItem.category_id;
    data.user_rights_id=SubChildMenuItem.user_rights_id;
    data.sequence_no=SubChildMenuItem.sequence_no;
    data.user_id= profile.UserId;
    data.page_title = SubChildMenuItem.page_title;
    data.meta_description = SubChildMenuItem.meta_description;
    data.is_active=SubChildMenuItem.is_active;  
    var url=myAppURLs.ModifyChildSubNavigation;
    httpCall.PostMethod(url,data).
    then(function(result){  
      $rootScope.demoroute();
        $rootScope.update();
      vm.msg=result; 
      vm.isClicked = true;    
      vm.SubChildMenuItem=angular.copy(vm.master);
      vm.getSubchildVal();       
    },
    function(error){      
      $log.info(error);      
    });
  }
}]);