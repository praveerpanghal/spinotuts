app.controller('EbooksPostCtrl', ['$route','$log','JsonDataService','$filter','myAppURLs','EncodeService','httpCall','permission',
function ($route,$log,JsonDataService,$filter,myAppURLs,EncodeService,httpCall,permission) {
 var vm=this;
  var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));
 vm.urid = profile.UserRightsId;
 vm.buttons=permission.permissionbuttons(vm.urid);  

vm.reload=function(){
  vm.ebookpost.category_id='';
  vm.ebookpost.chapter_id = '';
  vm.ebookpost.chapter_description ='';
  vm.ebookpost.book_id= '';
  vm.ebookpost.flag='';
  //vm.booksList='';
  vm.isselected=false;
  vm.buttons=permission.permissionbuttons(vm.urid); 
}
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
  ['left-justify', 'center-justify', 'right-justify'],
  ['code', 'quote', 'paragraph'],
  ['css-class']
];

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
                      vm.getList=function(id,info){
                        data.category_id = 0;
                        var url = myAppURLs.GetEbookChapterList;
                        httpCall.PostMethod(url,data)               
                        .then(function(result) {    
                          if(info=="remaining"){                            
                            result= result.filter(function( obj ) {
                          return obj["chapter_description"] == undefined && obj["category_id"]==id;
                      });
                      vm.booksList = result;
                      console.log(vm.booksList )
                          }
                          else if(info=="fetch"){
                            vm.booksList = result;
                          }else{
                            vm.bookslists = result;                              
                          }
                        }, 
                        function(error) { 
                          console.log(error.statusText);
                          $log.info(error);
                        });
                      }
vm.getList(0);
  vm.open=function(cid,block){    
    vm.EbookInfo= vm.bookslists.filter(function( obj ) {
                return obj.chapter_id == cid;
            });
            if(block=="model"){
              vm.EbookInfo=vm.EbookInfo[0];
            }else{
              vm.ebookpost=vm.EbookInfo[0];
            }
    }
    vm.update_iq_info = function(uiq,status){
      vm.isClicked = false;
      vm.isselected = true;
      vm.buttons=permission.permissionbuttonsupdate(vm.urid,status); 
      vm.getList(uiq.category_id,'fetch');        
      vm.open(uiq)
     }
     
     vm.EbookPost=function(name,status,ebookpost){    
    var updateurl = myAppURLs.UpdateBookContent;     
    var createurl = myAppURLs.SubmitBookContent;        
       
    data.UserId=profile.UserId;
    data.chapter_id = ebookpost.chapter_id;
    data.chapter_description = ebookpost.chapter_description;
    if(status){
      data.book_id= ebookpost.book_id;
      data.flag=status;
      httpCall.PostMethod(updateurl ,data)               
      .then(function(result) {
        vm.isClicked = true;
          vm.successmessage=result;         
          vm.getList(0);
          vm.isClicked = true;
    },
      function(error) {
        console.log(error.statusText);
        $log.info(error);
      });
      vm.eclick=true; 
    }else {
      if(name!="close"&&name!="add"){             
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
    }else{
      vm.reload();
    }
  }
  
  }    
}
]);      