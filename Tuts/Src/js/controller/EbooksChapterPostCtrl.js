app.controller('EbooksChapterPostCtrl', ['$route','$log','$filter','myAppURLs','JsonDataService','EncodeService','httpCall','$sanitize','$sce',
function ($route,$log,$filter,myAppURLs,JsonDataService,EncodeService,httpCall,$sanitize,$sce) {
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
  vm.BtnShow=true;
  vm.buttonnavi=true;
  var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));  
  vm.urid = profile.UserRightsId;  
  vm.reload=function(){  
    vm.isClicked = false; 
    vm.BtnShow=true;
    vm.successmessage = "" ;
    vm.ebookpostch.category_id = '';
    vm.ebookpostch.chapter_name = '';
    vm.ebookpostch.alias_url = '';
    vm.ebookpostch.sequence_no='';
    vm.ebookpostch.chapter_id ='';
    vm.ebookpostch.flag='';
  }
  /*get all list begin*/
  vm.getIQList = function(){
    var url = myAppURLs.GetEbookChapterList;
    var data = new Object();  
    data.category_id = '0';
    data.chapter_id = '0';    
    httpCall.PostMethod(url,data).then(function(result){            
      vm.bookslists = result;
    },function(error){
      console.log(error.statusText);
      $log.err(error);
    });
  }
  vm.getIQList();
  /*get all list end*/
  vm.to_trusted = function(html_code) {
    return $sce.trustAsHtml(html_code);
  }
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
  
  vm.selection=[];
    vm.MultipleSelection = function(vals) {
         var idx = vm.selection.indexOf(vals);
    if(idx=='0'){
      vm.buttonnavi=true;
    }
          if (idx > -1) {
      
             vm.selection.splice(idx, 1);
         }
         else {
             vm.selection.push(vals);
      vm.buttonnavi=false;
         }
  }
  
  vm.changestatus=function(status)
  {
    var ebookpostch=[];
    ebookpostch.category_id ='0';
    ebookpostch.chapter_name = '';
    ebookpostch.alias_url = '';
    ebookpostch.sequence_no='0';      
    ebookpostch.chapter_id=  vm.selection.toString()
    vm.ebookchapterpost(ebookpostch,status);
  }
  // vm.disapprove=function(){
  //   if(vm.selection.toString().length>0){
  //     var data={"article_ids":vm.selection.toString(),"user_id":profile.UserId};
  //     console.log(data)
  //   }
  // }
  // vm.approve=function(){
  //   if(vm.selection.toString().length>0){
  //     var data={"article_ids":vm.selection.toString(),"user_id":profile.UserId};
  //     console.log(data)
  //   }
  // }
  
  /* update_iq_info  begin*/
  vm.update_iq_info = function(uiq,status){
    $(".seqnum").prop('disabled', false);
    vm.isClicked = false;
    vm.BtnShow=false;
    vm.successmessage = "";
    vm.ebookpostch= angular.copy(uiq); 
  }
  /*update_iq_info end*/
  /*create update begin*/
  vm.ebookchapterpost=function(ebookpostch,status){  console.log(status)
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
      console.log(data)
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
  }
  else {      
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
  }
}
/*create update end*/
}]);