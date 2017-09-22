app.controller('MenuControlCtrl', ['$scope','$http','$localStorage','myAppURLs','$location','$rootScope','CatService','ArticlesService','JsonDataService','$route','MenuService','$filter','$timeout','LogService','httpCall',
  function ($scope,$http,$localStorage,myAppURLs,$location,$rootScope,CatService,ArticlesService,JsonDataService,$route,MenuService,$filter,$timeout,LogService,httpCall){

  $scope.currentPageT = 1;
  $scope.currentPageM = 1;
  $scope.currentPageC = 1;
  $scope.pageSize = 6;

      $scope.pageChangeHandler = function(num) {
  };
$scope.tab = 0;
if(sessionStorage.successmessage){
$scope.tab = 1;
delete sessionStorage.successmessage;
}
$scope.userupdatemsg="";
if(sessionStorage.userupdatemsg){
$scope.tab = 2;
delete sessionStorage.userupdatemsg;
}
$scope.tnavupdatemsg="";
if(sessionStorage.tnavupdatemsg){
$scope.tab = 3;
delete sessionStorage.tnavupdatemsg;
}
$scope.mnavupdatemsg="";
if(sessionStorage.mnavupdatemsg){
$scope.tab = 3;
delete sessionStorage.mnavupdatemsg;
}
$scope.cnavupdatemsg="";
if(sessionStorage.cnavupdatemsg){
$scope.tab = 3;
delete sessionStorage.cnavupdatemsg;
}
var jsonurl=JsonDataService.GetJsonInfo($route.current.templateUrl);
httpCall.GetMethod(jsonurl)               
    .then(function(response) {   
    $scope.JsonVals = response;  
 }, 
 function(error) { 
  $log.info(error);
}); 

  $scope.intab=11;
  $scope.changeinsideTab = function(intab1,item){

    if(localStorage.getItem('testObject')){
       var oval=jQuery.parseJSON(localStorage.getItem('testObject'));       
      }
      var mval=LogService.getmenuval();
      if(oval){    
     mval.menu_name=oval.menu_name;
    mval.page_url=oval.page_url;
    mval.sequence_no=oval.sequence_no;
    mval.page_name=oval.page_name;
    mval.user_rights_id=oval.user_rights_id;
    mval.is_active=oval.is_active;
    mval.parent_menu_id=oval.parent_menu_id;
    mval.category_name=oval.category_name;
    mval.category_url=oval.category_url;  
  }


    
mval.editing=false;
    
    $scope.intab = intab1;
  };
  $scope.isActiveinsideTab = function(intab){
  
    return $scope.intab === intab;
  };




if(sessionStorage.UserName){
$scope.cLists = JSON.parse(localStorage["cList"]);
 
/* Menu Control */

var url = myAppURLs.GetNavigationControl;

MenuService.GetNavigationControl(url)               
    .then(function(data) {    
      if (data.GetNavigationControlResult!=='') {
        
          $scope.menuNav = JSON.parse(data.GetNavigationControlResult);
          $scope.menuNavCtrls = $scope.menuNav[0];
        
      } 
      else {
       $log.info(data);
     }
   }, 
   function(error) { 
    $log.info(error);
  });

/* User Rights */

var url = myAppURLs.GetScreenRights;

MenuService.GetScreenRights(url)               
    .then(function(data) {    
      if (data.GetScreenRightsResult!=='') {
        
          $scope.userRights = data.GetScreenRightsResult;
          
          //console.log($scope.userRights);
      } 
      else {
       $log.info(data);
     }
   }, 
   function(error) { 
    $log.info(error);
  });

/* Menu Ctrl Btns Hide & Show */
  $scope.editItem = function (item) {

      if(localStorage.getItem('testObject')){
       var oval=jQuery.parseJSON(localStorage.getItem('testObject'));       
      }
      var mval=LogService.getmenuval();
      if(oval){    
     mval.menu_name=oval.menu_name;
    mval.page_url=oval.page_url;
    mval.sequence_no=oval.sequence_no;
    mval.page_name=oval.page_name;
    mval.lookup_value_id=oval.lookup_value_id;
    mval.user_rights_id=oval.user_rights_id;
    mval.is_active=oval.is_active;
    mval.parent_menu_id=oval.parent_menu_id;
    mval.category_name=oval.category_name;
    mval.category_url=oval.category_url;  
  }

      localStorage.setItem('testObject', JSON.stringify(item));
mval.editing=false;


    LogService.memuupdate(item);
    item.editing = true;
    $scope.myObj=angular.copy(item);        
  }
  $scope.cancel = function (item) {
        localStorage.removeItem("testObject");     
    item.editing = false;
    item.menu_name=$scope.myObj.menu_name;
    item.page_url=$scope.myObj.page_url;
    item.sequence_no=$scope.myObj.sequence_no;
    item.page_name=$scope.myObj.page_name;
    item.lookup_value_id=$scope.myObj.lookup_value_id;
    item.user_rights_id=$scope.myObj.user_rights_id;
    item.is_active=$scope.myObj.is_active;
    item.parent_menu_id=$scope.myObj.parent_menu_id;
    item.category_name=$scope.myObj.category_name;
    item.category_url=$scope.myObj.category_url;
  }

 /* Update TopNavigation start */

/* copy text TopNav URL start */
  $scope.copyTopNavText = function(name,mid){

    $scope.page_url = $filter('lowercase')(name).replace(/ +(?=)/g,'-');
    $('#tpu'+mid).val($scope.page_url);
    $('input').trigger('input');
  }
/* copy text TopNav URL end */

$scope.updatetopnav=function(topnav){ 
 localStorage.removeItem("testObject"); 
  topnav.editing = false;
  
var data = new Object();
data.user_id = $scope.uinfo;
data.menu_id = topnav.menu_id;
data.menu_name = topnav.menu_name;
data.page_url = topnav.page_url;
data.sequence_no = topnav.sequence_no;
data.page_name = topnav.page_name;
data.lookup_value_id = topnav.lookup_value_id;
data.user_rights_id = topnav.user_rights_id;
data.is_active = topnav.is_active;
data.controller = topnav.controller||'';

console.log(data);
  
  var url=myAppURLs.UpdateTopNavigation;
  
  MenuService.UpdateTopNavigation(url,data)               
    .then(function(data) {    
     // console.log(data);
        if(data==1){
          $scope.tnavupdatemsg="navigation updated successfully";
          sessionStorage.tnavupdatemsg=$scope.tnavupdatemsg; 
          $timeout(function() {
            $scope.tnavupdatemsg = "";
          }, 2000);                           
        }else if(data==-1){
          topnav.editing = true;
          $scope.errormsg = "sequence number already exists , please try another !";
          $timeout(function() {
            $scope.errormsg = "";
          }, 2000);
        }       
      else {
       $log.info(data);
     }
   }, 
   function(error) { 
    $log.info(error);
  }); 
  
}
/* Update TopNavigation end */

/* Update MiddleNavigation */

/* copy text MiddleNav URL start */
$scope.copyMiddleNavText = function(mname,mmid){

    $scope.page_url = $filter('lowercase')(mname).replace(/ +(?=)/g,'-');
    
    $('#mpu'+mmid).val($scope.page_url);
    $('input').trigger('input');
  }
/* copy text MiddleNav URL end */

$scope.updatemiddlenav=function(topnav){ 
  topnav.editing = false;
  
//console.log(data);
var data = new Object();
data.user_id = $scope.uinfo;
data.menu_id = topnav.menu_id;
data.sequence_no = topnav.sequence_no;
data.menu_name = topnav.menu_name;
data.page_url = topnav.page_url;
data.page_name = topnav.page_name;
data.lookup_value_id = topnav.lookup_value_id;
data.user_rights_id = topnav.user_rights_id;
data.is_active = topnav.is_active;
data.controller = topnav.controller||'';

  var url=myAppURLs.UpdateTopNavigation;
  
  MenuService.UpdateTopNavigation(url,data)               
    .then(function(data) {    
      //console.log(data);
        if(data == 1){
          $scope.mnavupdatemsg="navigation updated successfully";
          sessionStorage.mnavupdatemsg=$scope.mnavupdatemsg;
          $timeout(function() {
            $scope.mnavupdatemsg = "";
          }, 2000);                               
        }
      else if(data == -1){ 
          $scope.errormsg = "sequence number already exists , please try another !";
          $timeout(function() {
            $scope.errormsg = "";
          }, 2000);          
      topnav.editing = true;         
        } 
      else {
        $log.info(data);
     }
   }, 
   function(error) { 
    $log.info(error);
  });
}

/* Update ChildNavigation start */

/* copy text ChildNav URL start */
   $scope.copyChildNavText = function(cname,cmid){
    $scope.cpage_url = $filter('lowercase')(cname).replace(/ +(?=)/g,'-');    
    $('#cpu'+cmid).val($scope.cpage_url);
    $('input').trigger('input');
  }
/* copy text ChildNav URL end */
$scope.updatechildnav=function(topnav){ 
  topnav.editing = false;  

var data = new Object();
data.user_id = $scope.uinfo;
data.category_id = topnav.category_id;
data.category_name = topnav.category_name;
data.sequence_no = topnav.sequence_no;
data.category_url = topnav.category_url;
data.page_name = topnav.page_name||'';
data.user_rights_id = topnav.user_rights_id;
data.is_active = topnav.is_active;
data.parent_menu_id = topnav.parent_menu_id;
data.controller = topnav.controller||'';


  var url=myAppURLs.UpdateChildNavigation;
  
  MenuService.UpdateChildNavigation(url,data)               
    .then(function(data) {
        if(data == 1){
          $scope.cnavupdatemsg="navigation updated successfully";
          sessionStorage.cnavupdatemsg=$scope.cnavupdatemsg;
          $timeout(function() {
            $scope.cnavupdatemsg = "";
          }, 2000);                               
        }
        else if(data == -1){
          $scope.errormsg = "sequence number already exists , please try another !";
          $timeout(function() {
            $scope.errormsg = "";
          }, 2000);          
        topnav.editing = true;
        }
      else {
       $log.info(data);
     }
   }, 
   function(error) { 
    $log.info(error);
  });
}
/* Update ChildNavigation end */

/* create top nav copy method start */
$scope.ctopNav=[];
$scope.copyTText = function(name){
  $scope.ctopNav.ctpage_url = $filter('lowercase')(name).replace(/ +(?=)/g,'-');   
}
/* create top nav copy method end */

/* Create topNavigation start */
$scope.createtopnav=function(){
  var topnav = $scope.ctopNav;
  $scope.master={};   
  
var data = new Object();
data.menu_name = topnav.ctmenu_name;
data.page_url = topnav.ctpage_url;
data.controller = topnav.ctctrlName||'';
data.lookup_value_id = topnav.lookup_value_id;
data.user_rights_id = topnav.ctuser_rights_id;
data.page_name = topnav.ctpage_name||'';
data.sequence_no = topnav.ctseqNo||'';
data.header = "1";
data.user_id = $scope.uinfo;

//console.log(data);
  var url=myAppURLs.CreateTopNavigation;
  
  MenuService.CreateTopNavigation(url,data)               
    .then(function(data) {    
      //console.log(data);
      
        if(data==1){
          $scope.sucessmsg = 'Navigation Created successfully.';
          $scope.ctopNav=angular.copy($scope.master);
          $timeout(function() {
            $scope.sucessmsg = "";
          }, 2000);
        }
        else if(data == -1){
            $scope.existmsg = "sequence number already exists , please try another !";            

          $timeout(function() {
            $scope.existmsg = "";
          }, 2000);
          
        }
      
      else {
       $log.info(data);
     }
   }, 
   function(error) { 
    $log.info(error);
  });
 
}
/* Create topNavigation End */

/* middle nav copy method start */
$scope.cmiddleNav=[];
$scope.copyMText = function(name){
  $scope.cmiddleNav.mpage_url = $filter('lowercase')(name).replace(/ +(?=)/g,'-');   
}
/* middle nav copy method end */

/* Create middleNavigation start */
$scope.createmiddlenav=function(){
  var cmiddleNav = $scope.cmiddleNav;
  $scope.master={};
   var data = new Object();
   data.menu_name = cmiddleNav.mmenu_name;
   data.sequence_no = cmiddleNav.mseqNo||'';
   data.page_url = cmiddleNav.mpage_url;
   data.lookup_value_id = cmiddleNav.lookup_value_id;
   data.user_rights_id = cmiddleNav.muser_rights_id;
   data.page_name = cmiddleNav.mpage_name||'';
   data.header = "2";
   data.user_id = $scope.uinfo;
   data.controller = cmiddleNav.mctrlName||'';
   //console.log(data);

  var url=myAppURLs.CreateTopNavigation;
  
  MenuService.CreateTopNavigation(url,data)               
    .then(function(data) {    
     // console.log(data);
        if(data == 1){
          $scope.sucessmsg = 'Navigation Created successfully.';
          $scope.cmiddleNav=angular.copy($scope.master);
          $timeout(function() {
            $scope.sucessmsg = "";
          }, 2000);
        }
        else if(data == -1){
          $scope.existmsg = "sequence number already exists , please try another !";
          $timeout(function() {
            $scope.existmsg = "";
          }, 2000);          
        }       
      else {
       $log.info(data);
     }
   }, 
   function(error) { 
    $log.info(error);
  });
  
}
/* Create middleNavigation end */

/* bottom nav copy method start */
$scope.cbtmNav=[];
$scope.copyBText = function(name){
  $scope.cbtmNav.cbpage_url = $filter('lowercase')(name).replace(/ +(?=)/g,'-');   
}
/* bottom nav copy method end */

/* Create bottomNavigation start */
$scope.createbottomnav=function(){
  var cbtmNav = $scope.cbtmNav;
  $scope.master={};    
 
 var data = new Object();
 data.category_name = cbtmNav.cbmenu_name;
 data.sequence_no = cbtmNav.cbseqNo||'0';
 data.controller = cbtmNav.cbctrlName||'';
 data.category_url = cbtmNav.cbpage_url;
 data.page_name = cbtmNav.cbpage_name||'';
 data.parent_menu_id = cbtmNav.cbparent_menu_id;
 data.user_rights_id = cbtmNav.cbuser_rights_id;
 data.user_id = $scope.uinfo;
//console.log(data);
  var url=myAppURLs.CreateChildNavigation;
  
  MenuService.CreateChildNavigation(url,data)               
    .then(function(data) {    
     
        if(data == 1){
          $scope.sucessmsg = 'Navigation Created successfully.';
          $scope.cbtmNav=angular.copy($scope.master);
          $timeout(function() {
            $scope.sucessmsg = "";
          }, 2000);
        }
        else if(data == -1){
          $scope.existmsg = "sequence number already exists , please try another !";
          $timeout(function() {
            $scope.existmsg = "";
          }, 2000);
        }
      else {
       $log.info(data);
     }
   }, 
   function(error) { 
    $log.info(error);
  });
  
}
/* Create bottomNavigation end */

/* clear fields start */
$scope.clearFlds=function(){
  $scope.master={};
  $scope.ctopNav=angular.copy($scope.master);
  $scope.cmiddleNav=angular.copy($scope.master);
  $scope.cbtmNav=angular.copy($scope.master);
}
/* end clear end */

/* GetParentNavigationList begin */
  var url=myAppURLs.GetParentNavigationList;
  MenuService.GetParentNavigationList(url)               
    .then(function(data) {
      if (data.GetParentNavigationListResult!=='') {
        $scope.parentNavResult=data.GetParentNavigationListResult;
        //console.log($scope.parentNavResult);       
      } 
      else {
        $log.info(data);
     }
   }, 
   function(error) {
    $log.info(error);
  });

/* get navigation type */
var url = myAppURLs.GetLookup;
var data = {"lookup_id":"1"};
MenuService.GetLookup(url,data).then(function(data){
  if (data) {
    $scope.menuTypes = data;
    //console.log($scope.menuTypes);
  }
  else{
    $log.info(data);
  }
})
/* GetParentNavigationList end */
}
else{
  $location.path('/Login');
}
}]);