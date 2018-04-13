app.controller('InterviewQuestionsCtrl', ['$route','$log','myAppURLs','JsonDataService','EncodeService','httpCall','ButtonService','$rootScope',
function ($route,$log,myAppURLs,JsonDataService,EncodeService,httpCall,ButtonService,$rootScope) {
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
  vm.menu = [
    ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
    ['format-block'],
    ['font'],
    ['font-size'],
    ['font-color', 'hilite-color'],
    ['remove-format'],
    ['ordered-list', 'unordered-list', 'outdent', 'indent'],
    ['left-justify', 'center-justify', 'right-justify', 'paragraph'],
    ['css-class']
  ];
  vm.BtnShow=true;
  vm.buttonnavi=true; 
  var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));  
  vm.urid = profile.UserRightsId;  
  
  //vm.buttons=ButtonService.permissionbuttons(vm.urid);  
  vm.reload=function(){
    vm.qdata=[];
    vm.isClicked = false; 
    vm.showmee=false; 
    vm.successmessage = "";
    vm.qdata.category_id = '';
    vm.qdata.question_description = '';
    vm.qdata.answer_description =  '';
    vm.qdata.question_id =  '';
    vm.qdata.flag =  '';
    //vm.buttons=ButtonService.permissionbuttons(vm.urid);     
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
  
  var url = myAppURLs.fetchcategory;
  var data = new Object();  
  data.parent_menu_id = '4';
  
  httpCall.PostMethod(url,data).
  then(function(result){
    vm.catList = result.fetchcategoryResult;             
  },
  function(error){
    console.log(error.statusText);
    $log.err(error);
    
  });
  
  vm.getIQList = function(){
    var url = myAppURLs.GetInterviewQuestionsList;
    var data = new Object();  
    data.category_id = '0';
    httpCall.PostMethod(url,data).then(function(result){      
      vm.interviewList = result;
      vm.selection=[];
      vm.buttonnavi=true;
      vm.successmessage = "";
      //console.log(vm.interviewList)
    },function(error){
      console.log(error.statusText);
      $log.err(error);
    });
  }
  vm.getIQList();
  
  //   vm.open=function(qid,block){    
  //       var data = new Object();
  //       data.question_id = qid;
  //       var url = myAppURLs.GetInterviewQuestionsList;      
  //       httpCall.PostMethod(url,data).then(function(result){
  // 	  if(block=='model'){
  //         vm.qdatainfo = result[0];           
  // 	  }
  // 	  else
  // 	  {
  //         vm.qdata = result[0];     
  // console.log(vm.qdata)		
  // 	  }
  //       }   
  //       ,function(error){
  //         console.log(error.statusText);
  //         $log.err(error);
  //       });
  //     }    
  vm.successmessage = "" ;
  
  vm.submit_btn = true;
  
  
  vm.update_iq_info = function(uiq,status){
    vm.isClicked = false;
    vm.showmee=true;
    vm.BtnShow=false;
    vm.successmessage = "";
    console.log(uiq)
    vm.qdata= angular.copy(uiq); 
    console.log(vm.qdata)
  }
  vm.changestatus=function(status)
  {    
    var iq=[];
    iq.category_id = 0;
    iq.question_description ='';
    iq.answer_description ='';
    iq.question_id =  vm.selection.toString();
    console.log(iq)
    console.log(status)
    vm.InterviewQuestion(iq,status)
  }
  vm.InterviewQuestion=function(iq,status){
    
    var data = new Object();
    var updateurl = myAppURLs.ModifyInterviewQuestions;     
    var createurl = myAppURLs.SubmitInterviewQuestions;        
    data.UserId = profile.UserId;
    data.category_id = iq.category_id;
    data.question_description = iq.question_description;
    data.answer_description = iq.answer_description||'';
    if(status){
      data.question_id = iq.question_id;
      data.flag = status;
      console.log(data)
      httpCall.PostMethod(updateurl,data)               
      .then(function(result) {
        vm.successmessage = result;
        vm.isClicked = true;
        $rootScope.demoroute();
        $rootScope.update();
        vm.getIQList();         
        
      }, 
      function(error) {
        console.log(error.statusText);
        $log.info(error);
      });
    }else {
      httpCall.PostMethod(createurl,data)               
      .then(function(result) {        
        vm.successmessage=result.split(',')[0];
        vm.isClicked = true;
        vm.getIQList();        
      }, 
      function(error) {
        console.log(error.statusText);
        $log.info(error);
      });
    }
  }
}]);