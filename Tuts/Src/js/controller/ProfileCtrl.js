app.controller('ProfileCtrl', ['$route','$http','JsonDataService','myAppURLs','Upload','fileUpload','EncodeService','httpCall',
function ($route,$http,JsonDataService,myAppURLs,Upload,fileUpload,EncodeService,httpCall) {
  var vm=this;
  var jsonurl=JsonDataService.GetJsonInfo($route.current.templateUrl);
  httpCall.GetMethod(jsonurl)               
  .then(function(result) {   
    vm.JsonVals = result;  
  }, 
  function(error) { 
    $log.info(error);
  });
  var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));
  $(document).click(function() {
    $('.postArticleCont').hide();
    vm.userupdatemsg="";
    vm.userupdatemsg1="";
  });
  
  
  var gurl=myAppURLs.GetCountryList;
  httpCall.GetMethod(gurl)               
  .then(function(result) {
    vm.countrylists=result.GetCountryListResult;  
  }, 
  function(error) { 
    $log.info(error);    
  });
vm.selectedItemChanged=function(id){
  var url=myAppURLs.GetStateList;
  var data={"country_id": id};
  httpCall.PostMethod(url,data)               
  .then(function(result) {    
    vm.GetStateLists=result.GetStateListResult;  
  }, 
  function(error) { 
    $log.info(error);    
  });  
}
vm.getdata=function(){  
var url=myAppURLs.GetUserProfileDetails;
var data={"user_id": profile.UserId};
httpCall.PostMethod(url,data)               
.then(function(result) {  
  vm.userprofiledetails=result.GetUserProfileDetailsResult[0];    
  vm.selectedItem(vm.userprofiledetails.country_id,vm.userprofiledetails.state_id);
}, 
function(error) { 
  $log.info(error);  
});
}
vm.getdata();
vm.selectedItem=function(a,b){
  var url=myAppURLs.GetStateList;
  var data={"country_id": a};
  httpCall.PostMethod(url,data)               
  .then(function(result) {    
    vm.GetStateLists=result.GetStateListResult;
    var index =vm.GetStateLists.map(function(e) { return e.state_id; }).indexOf(b);
    vm.state_id=vm.GetStateLists[index].state_name;  
  }, 
  function(error) { 
    $log.info(error);    
  });
}
vm.foucs=function(){
  $('button').attr("disabled", false);
}
vm.mobbutton=true;
vm.dobbutton=true;
vm.editbutton=true;
vm.adrsbut=true;
vm.citybutton=true;
vm.countrybut=true;
vm.run=function(v){
  switch (v) {
    case "dobbutton":
    vm.dobbutton=false;
    break;
    case "mobbutton":
    vm.mobbutton=false;
    break;
    case "editbutton":
    vm.editbutton=false;
    break;
    case "adrsbut":
    vm.adrsbut=false;
    break;
    case "citybutton":
    vm.citybutton=false;
    break;
    case "countrybut":
    vm.countrybut=false;
    break;
  }        
};
vm.sel=false;
function fixBinary (bin) {
  var length = bin.length;
  var buf = new ArrayBuffer(length);
  var arr = new Uint8Array(buf);
  for (var i = 0; i < length; i++) {
    arr[i] = bin.charCodeAt(i);
  }
  return buf;
}
vm.updateprofile=function(croppedDataUrl,userprofiledetail){    
  if(vm.picFile){
    var binary = fixBinary(atob(croppedDataUrl.split(',')[1]));  
    var file = new File([binary], vm.picFile.name, {type: "'image/jpeg"});
  
    var uploadUrl = "/multer";
    var fd = new FormData();
    fd.append('file', file);
    $http.post(uploadUrl,fd, {
      transformRequest: angular.identity,
      headers: {'Content-Type': undefined}
    })
    .success(function(response){          
      vm.eselect=false;         
    })
    .error(function(){
      console.log("error!!");
    });
    vm.profile_pic='/Src/images/uploads/'+profile.UserId+'/'+file.name;     
  }  
  else{
    vm.profile_pic=vm.userprofiledetails.profile_pic;
  }
  var url=myAppURLs.UpdateUserProfile;
  var data = new Object();
  data.user_id=profile.UserId;
  data.birth_date= userprofiledetail.birth_date;
  data.mobile= userprofiledetail.mobile;
  data.email= userprofiledetail.email;
  data.address= userprofiledetail.address;
  data.city=userprofiledetail.city;
  data.country_id=userprofiledetail.country_id;
  data.state_id=userprofiledetail.state_id;
  data.profile_pic=vm.profile_pic||'';      
  
  httpCall.PostMethod(url,data)               
  .then(function(result) {     
    
    if(result.UpdateUserProfileResult == 1){
      vm.userupdatemsg="Profile updated successfully";
      vm.getdata();
      vm.mobbutton=true;
      vm.dobbutton=true;
      vm.editbutton=true;
      vm.adrsbut=true;
      vm.citybutton=true;
      vm.countrybut=true;
      $('button').attr("disabled", true);
    }
    else{
      alert("profile not updated");
    }    
  }, 
  function(error) { 
    $log.info(error);
  });
}

vm.changepwds=[];
vm.changepwd=function(){
  vm.master = {};
  var url=myAppURLs.ChangePassword;
  var data={"user_id": profile.UserId,"old_password": vm.changepwds.curpwd,"new_password":vm.changepwds.pw1};
  httpCall.PostMethod(url,data)               
  .then(function(result) {      
    if(result.ChangePasswordResult == 1){
      vm.userupdatemsg1="password updated successfully";      
      vm.changepwds = angular.copy(vm.master);
      vm.myForm.$setPristine();
      vm.myForm.$setUntouched();
    }
    else if(result.ChangePasswordResult == -1){
      vm.userupdatemsg1="old password is wrong";
    }
    else{
      alert("user does  not exists");
    }  
  }, 
  function(error) { 
    $log.info(error);
  });
}
}]);