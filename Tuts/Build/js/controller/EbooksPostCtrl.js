app.controller("EbooksPostCtrl",["$route","$log","JsonDataService","$filter","myAppURLs","EncodeService","httpCall","$rootScope",function(e,t,o,s,n,i,c,r){var a=this,l=JSON.parse(i.encodelogval(sessionStorage.UserInfo));a.urid=l.UserRightsId;var u=o.GetJsonInfo(e.current.templateUrl);c.GetMethod(u).then(function(e){a.JsonVals=e},function(e){console.log(e.statusText),t.info(e)}),a.BtnShow=!0,a.menu=[["bold","italic","underline","strikethrough","subscript","superscript"],["format-block"],["font"],["font-size"],["font-color","hilite-color"],["remove-format"],["ordered-list","unordered-list","outdent","indent"],["left-justify","center-justify","right-justify"],["code","quote","paragraph"],["css-class"]],a.reload=function(){a.ebookpost=[],a.isClicked=!1,a.showmee=!1,a.newchapter=!0,a.successmessage="",a.ebookpost.category_id="",a.ebookpost.chapter_id="",a.ebookpost.chapter_description="",a.ebookpost.book_id="",a.ebookpost.flag="",a.isselected=!1};var d=new Object;a.successmessage="";var p=n.fetchcategory;d.parent_menu_id="6",c.PostMethod(p,d).then(function(e){a.cLists=e.fetchcategoryResult},function(e){console.log(e.statusText),t.err(e)}),a.selectedItemChanged=function(e){function t(e,t){return e.filter(function(e){return Object.keys(t).every(function(o){return e[o]==t[o]})})}var o=t(JSON.parse(JSON.stringify(a.bookslists)),{category_id:e});o.length>0?a.ebookpostch.sequence_no=o[0].sequence_no+1:a.ebookpostch.sequence_no=1},a.successmessage="",a.submit_btn=!0,a.selection=[],a.MultipleSelection=function(e){var t=a.selection.indexOf(e);"0"==t&&(a.buttonnavi=!0),t>-1?a.selection.splice(t,1):(a.selection.push(e),a.buttonnavi=!1)},a.getList=function(e){var o=new Object;o.category_id=0,o.chapter_id=0;var s=n.GetEbookChapterList;c.PostMethod(s,o).then(function(e){a.bookslists=e,a.newchapter=!1,a.selection=[],a.buttonnavi=!0,a.successmessage=""},function(e){console.log(e.statusText),t.info(e)})},a.getList(0),a.getChapterList=function(e,t){t?a.Bookslists=a.bookslists.filter(function(t){return void 0==t.chapter_description&&t.category_id==e}):a.Bookslists=a.bookslists},a.update_iq_info=function(e,t){a.isClicked=!1,a.showmee=!0,a.BtnShow=!1,a.isselected=!0,a.successmessage="",a.ebookpost=angular.copy(e)},a.changestatus=function(e){var t=[];t.chapter_id=0,t.chapter_description="",t.book_id=a.selection.toString(),a.EbookPost(t,e)},a.EbookPost=function(e,o){var s=new Object,i=n.UpdateBookContent,u=n.SubmitBookContent;s.UserId=l.UserId,s.chapter_id=e.chapter_id,s.chapter_description=e.chapter_description,o?(s.book_id=e.book_id,s.flag=o,console.log(s),c.PostMethod(i,s).then(function(e){a.isClicked=!0,a.successmessage=e,r.demoroute(),r.update(),a.getList(0),a.isClicked=!0},function(e){console.log(e.statusText),t.info(e)}),a.eclick=!0):(s.flag="P",c.PostMethod(u,s).then(function(e){a.getList(0),a.successmessage=e.split(",")[0],a.isClicked=!0},function(e){console.log(e.statusText),t.info(e)}))}}]);