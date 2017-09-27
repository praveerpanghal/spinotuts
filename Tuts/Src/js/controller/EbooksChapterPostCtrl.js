app.controller('EbooksChapterPostCtrl', ['$route','$log','$filter','myAppURLs','JsonDataService','EncodeService','httpCall','ButtonService',
function ($route,$log,$filter,myAppURLs,JsonDataService,EncodeService,httpCall,ButtonService) {
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
vm.urid = profile.UserRightsId;  

vm.buttons=ButtonService.permissionbuttons(vm.urid);  
vm.reload=function(){  
  vm.ebookpostch.category_id = '';
  vm.ebookpostch.chapter_name = '';
  vm.ebookpostch.alias_url = '';
  vm.ebookpostch.sequence_no='';
  vm.ebookpostch.chapter_id ='';
  vm.ebookpostch.flag='';
  vm.buttons=ButtonService.permissionbuttons(vm.urid); 
}
  /*get all list begin*/
  vm.getIQList = function(){
    var url = myAppURLs.GetEbookChapterList;
    var data = new Object();  
    data.category_id = '0';
    httpCall.PostMethod(url,data).then(function(result){      
    vm.bookslists = result;
    },function(error){
      console.log(error.statusText);
      $log.err(error);
    });
  }
  vm.getIQList();
  /*get all list end*/
/*fetchcategory begin*/
var url = myAppURLs.fetchcategory;
var data = new Object();  
data.parent_menu_id = '6';

httpCall.PostMethod(url,data).
  then(function(result){
    vm.cLists = result.fetchcategoryResult;             
  },
  function(error){
    console.log(error.statusText);
    $log.err(error);

  });
/*fetchcategory end*/
vm.copyText = function(name){ 
  vm.ebookpostch.alias_url = $filter('lowercase')(name).replace(/ +(?=)/g,'-');
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

/* update_iq_info  begin*/
vm.update_iq_info = function(uiq,status){
  $(".seqnum").prop('disabled', false);
vm.isClicked = false;

vm.buttons=ButtonService.permissionbuttonsupdate(vm.urid,status);  
vm.successmessage = "";
vm.ebookpostch= angular.copy(uiq); 
}
/*update_iq_info end*/
/*create update begin*/
vm.ebookchapterpost=function(name,status,ebookpostch){  
var data = new Object();
var createurl = myAppURLs.PostBookChapter;     
var updateurl = myAppURLs.UpdateBookChapter;        
data.UserId=profile.UserId;        
 data.category_id = ebookpostch.category_id;              
 data.chapter_name = ebookpostch.chapter_name;
 data.alias_url = ebookpostch.alias_url;
 data.sequence_no=ebookpostch.sequence_no;
if(status){
      data.chapter_id = ebookpostch.chapter_id;
      data.flag=status;   
      httpCall.PostMethod(updateurl,data)               
      .then(function(result) {          
          vm.successmessage=result;   
          vm.isClicked = true;                    
     vm.getIQList();
    },
      function(error) {
      console.log(error.statusText);
        $log.info(error);
      }
      );
}else {
  if(name!="close"&&name!="add"){      
httpCall.PostMethod(createurl,data)               
  .then(function(result) {      
    var fields = result.split(',');      
    vm.successmessage=fields[0];
    vm.isClicked = true;
     vm.getIQList();
       }, 
  function(error) { 
      console.log(error.statusText);
    $log.info(error);
  });

}else{
  vm.reload();
}
}

}
/*create update end*/
}]);