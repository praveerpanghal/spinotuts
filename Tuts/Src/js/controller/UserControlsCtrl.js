app.controller('UserControlsCtrl', ['$route','myAppURLs','$log','JsonDataService','EncodeService','httpCall',
  function ($route,myAppURLs,$log,JsonDataService,EncodeService,httpCall){
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
  vm.userupdatemsg='';

$('body').click(function() {
 vm.userupdatemsg='';
});

vm.mval=true;
vm.grun=function(){var sa='urole';
var checkboxes = $(".rbtn");
checkboxes.change(function() { 
var myClass = $(this).attr("name");
var nva=".update"+myClass;
submitButt = $(nva);
submitButt.attr("disabled", !checkboxes.is(":checked"));
});
}
  var url=myAppURLs.GetUserList;   
   vm.uinfo = profile.UserId;
   var data = { "userid": vm.uinfo };         
    httpCall.PostMethod(url,data)               
    .then(function(result) {
        var User_info1 = result.GetUserListResult; 
        vm.User_info = User_info1.filter(function(User_info1){
          return User_info1.UserId !=vm.uinfo;
        });
   }, 
   function(error) { 
    console.log(error.statusText); 
    $log.info(error);
  });

   vm.updatecontrol=function(usercontrol){ 
  var data={"user_id":usercontrol.UserId,"user_right_id":usercontrol.RightId,"is_active":usercontrol.IsActive,"user_rights_updated_by":vm.uinfo};
  var url=myAppURLs.ManageUserRights;
  httpCall.PostMethod(url,data)               
    .then(function(result) {          
        if(result.ManageUserRightsResult==1){
          vm.userupdatemsg="Information has been updated successfully";
                sessionStorage.userupdatemsg=vm.userupdatemsg;
                $('button').attr("disabled", true);                
                      }      
   }, 
   function(error) { 
    console.log(error.statusText); 
    $log.info(error);
  });
  }
}]);