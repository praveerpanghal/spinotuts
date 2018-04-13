app.controller('EbooksPostCtrl', ['$route','$log','JsonDataService','$filter','myAppURLs','EncodeService','httpCall','$rootScope',
function ($route,$log,JsonDataService,$filter,myAppURLs,EncodeService,httpCall,$rootScope) {
  var vm=this;
  var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));
  vm.urid = profile.UserRightsId;
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
  vm.menu = [
    ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
    ['format-block'],
    ['font'],
    ['font-size'],
    ['font-color', 'hilite-color'],
    ['remove-format'],
    ['ordered-list', 'unordered-list', 'outdent', 'indent'],
    ['left-justify', 'center-justify', 'right-justify'],
    ['code', 'quote', 'paragraph'],
    ['css-class']
  ];
  vm.reload=function(){
    vm.ebookpost=[];
    vm.isClicked = false;
    vm.showmee=false; 
   vm.newchapter=true;
    vm.successmessage = "";
    vm.ebookpost.category_id='';
    vm.ebookpost.chapter_id = '';
    vm.ebookpost.chapter_description ='';
    vm.ebookpost.book_id= '';
    vm.ebookpost.flag='';
    vm.isselected=false;
  }
  
  var data = new Object();  
  vm.successmessage = "";
  var url = myAppURLs.fetchcategory;
  data.parent_menu_id = '6';
  httpCall.PostMethod(url,data).
  then(function(result){
    vm.cLists = result.fetchcategoryResult;             
  },
  function(error){     
    console.log(error.statusText); 
    $log.err(error);      
  }); 
  
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
  
  vm.getList=function(id){
    var data = new Object(); 
    data.category_id = 0;
    data.chapter_id = 0;
    var url = myAppURLs.GetEbookChapterList;
    httpCall.PostMethod(url,data)               
    .then(function(result) {    
      vm.bookslists = result;
      vm.newchapter=false;
      vm.selection=[];
      vm.buttonnavi=true;
      vm.successmessage = "";
    }, 
    function(error) { 
      console.log(error.statusText);
      $log.info(error);
    });
  }
  vm.getList(0);
  vm.getChapterList=function(value,key){
    if(key){
      vm.Bookslists=vm.bookslists.filter(function( obj ) {
        return obj["chapter_description"] == undefined && obj["category_id"]==value; 
      });
    }
    else{
      vm.Bookslists=vm.bookslists;
    }
  }
  vm.update_iq_info = function(uiq,status){
    vm.isClicked = false;
    vm.showmee=true;
    vm.BtnShow=false;
    vm.isselected = true;
    vm.successmessage = "";
    vm.ebookpost= angular.copy(uiq);   
  }
  vm.changestatus=function(status)
  {    
    var ebookpost=[];
    ebookpost.chapter_id=0;
    ebookpost.chapter_description='';
    ebookpost.book_id=vm.selection.toString();
    vm.EbookPost(ebookpost,status)
  }
  vm.EbookPost=function(ebookpost,status){  
    var data = new Object();  
    var updateurl = myAppURLs.UpdateBookContent;     
    var createurl = myAppURLs.SubmitBookContent;
    data.UserId=profile.UserId;
    data.chapter_id = ebookpost.chapter_id;
    data.chapter_description = ebookpost.chapter_description;
    if(status){
      data.book_id= ebookpost.book_id;
      data.flag=status;
      console.log(data)
      httpCall.PostMethod(updateurl ,data)               
      .then(function(result) {
        vm.isClicked = true;
        vm.successmessage=result;
        $rootScope.demoroute();
        $rootScope.update();
        vm.getList(0);
        vm.isClicked = true;
      },
      function(error) {
        console.log(error.statusText);
        $log.info(error);
      });
      vm.eclick=true; 
    }else {                   
        data.flag='P';      
        httpCall.PostMethod(createurl,data)               
        .then(function(result) {                 
          vm.getList(0);     
          vm.successmessage=result.split(',')[0];  
          vm.isClicked = true;    	
        },
        function(error) {
          console.log(error.statusText);
          $log.info(error);
        });      
    }
    
  }    
}
]);      