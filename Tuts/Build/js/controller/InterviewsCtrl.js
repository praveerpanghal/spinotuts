app.controller("InterviewQuestionsCtrl",["$route","$log","myAppURLs","JsonDataService","EncodeService","httpCall","ButtonService","$rootScope",function(e,t,o,s,n,i,c,r){var u=this,a=s.GetJsonInfo(e.current.templateUrl);i.GetMethod(a).then(function(e){u.JsonVals=e},function(e){console.log(e.statusText),t.info(e)}),u.menu=[["bold","italic","underline","strikethrough","subscript","superscript"],["format-block"],["font"],["font-size"],["font-color","hilite-color"],["remove-format"],["ordered-list","unordered-list","outdent","indent"],["left-justify","center-justify","right-justify","paragraph"],["css-class"]],u.BtnShow=!0,u.buttonnavi=!0;var l=JSON.parse(n.encodelogval(sessionStorage.UserInfo));u.urid=l.UserRightsId,u.reload=function(){u.qdata=[],u.isClicked=!1,u.showmee=!1,u.successmessage="",u.qdata.category_id="",u.qdata.question_description="",u.qdata.answer_description="",u.qdata.question_id="",u.qdata.flag=""},u.selectedItemChanged=function(e){function t(e,t){return e.filter(function(e){return Object.keys(t).every(function(o){return e[o]==t[o]})})}var o=t(JSON.parse(JSON.stringify(u.bookslists)),{category_id:e});o.length>0?u.ebookpostch.sequence_no=o[0].sequence_no+1:u.ebookpostch.sequence_no=1},u.successmessage="",u.submit_btn=!0,u.selection=[],u.MultipleSelection=function(e){var t=u.selection.indexOf(e);"0"==t&&(u.buttonnavi=!0),t>-1?u.selection.splice(t,1):(u.selection.push(e),u.buttonnavi=!1)};var d=o.fetchcategory,f=new Object;f.parent_menu_id="4",i.PostMethod(d,f).then(function(e){u.catList=e.fetchcategoryResult},function(e){console.log(e.statusText),t.err(e)}),u.getIQList=function(){var e=o.GetInterviewQuestionsList,s=new Object;s.category_id="0",i.PostMethod(e,s).then(function(e){u.interviewList=e,u.selection=[],u.buttonnavi=!0,u.successmessage=""},function(e){console.log(e.statusText),t.err(e)})},u.getIQList(),u.successmessage="",u.submit_btn=!0,u.update_iq_info=function(e,t){u.isClicked=!1,u.showmee=!0,u.BtnShow=!1,u.successmessage="",console.log(e),u.qdata=angular.copy(e),console.log(u.qdata)},u.changestatus=function(e){var t=[];t.category_id=0,t.question_description="",t.answer_description="",t.question_id=u.selection.toString(),console.log(t),console.log(e),u.InterviewQuestion(t,e)},u.InterviewQuestion=function(e,s){var n=new Object,c=o.ModifyInterviewQuestions,a=o.SubmitInterviewQuestions;n.UserId=l.UserId,n.category_id=e.category_id,n.question_description=e.question_description,n.answer_description=e.answer_description||"",s?(n.question_id=e.question_id,n.flag=s,console.log(n),i.PostMethod(c,n).then(function(e){u.successmessage=e,u.isClicked=!0,r.demoroute(),r.update(),u.getIQList()},function(e){console.log(e.statusText),t.info(e)})):i.PostMethod(a,n).then(function(e){u.successmessage=e.split(",")[0],u.isClicked=!0,u.getIQList()},function(e){console.log(e.statusText),t.info(e)})}}]);