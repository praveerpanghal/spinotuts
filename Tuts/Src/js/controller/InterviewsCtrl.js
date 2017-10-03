app.controller('InterviewQuestionsCtrl', ['$route','$log','myAppURLs','JsonDataService','EncodeService','httpCall','ButtonService',
  function ($route,$log,myAppURLs,JsonDataService,EncodeService,httpCall,ButtonService) {
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
  
    var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));  
  vm.urid = profile.UserRightsId;  

  vm.buttons=ButtonService.permissionbuttons(vm.urid);  
  vm.reload=function(){
    vm.isClicked = false; 
    vm.successmessage = "";
    vm.qdata.category_id = '';
    vm.qdata.question_description = '';
    vm.qdata.answer_description =  '';
    vm.qdata.question_id =  '';
    vm.qdata.flag =  '';
    vm.buttons=ButtonService.permissionbuttons(vm.urid);     
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
    },function(error){
      console.log(error.statusText);
      $log.err(error);
    });
  }
  vm.getIQList();

  vm.open=function(qid,block){    
      var data = new Object();
      data.question_id = qid;
      var url = myAppURLs.GetInterviewQuestionsList;      
      httpCall.PostMethod(url,data).then(function(result){
	  if(block=='model'){
        vm.qdatainfo = result[0];           
	  }
	  else
	  {
        vm.qdata = result[0];     
console.log(vm.qdata)		
	  }
      }   
      ,function(error){
        console.log(error.statusText);
        $log.err(error);
      });
    }    
  vm.successmessage = "" ;

vm.submit_btn = true;


vm.update_iq_info = function(uiq,status){
  vm.isClicked = false;
  vm.buttons=ButtonService.permissionbuttonsupdate(vm.urid,status);  
vm.successmessage = "";

vm.open(uiq.question_id);
}

vm.InterviewQuestion=function(name,status,iq){
    
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
   httpCall.PostMethod(updateurl,data)               
      .then(function(result) {  
        console.log(result)    
          vm.successmessage = result;
          vm.isClicked = true;
          vm.getIQList();         
          
      }, 
      function(error) {
        console.log(error.statusText);
        $log.info(error);
      });
  }else {
    if(name!="close"&&name!="add"){
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
  }else{    
    vm.reload();
    
  }
}
}
}]);