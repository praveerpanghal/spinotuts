app.controller("MiddleNavigationCtrl",["$route","JsonDataService","myAppURLs","$filter","EncodeService","httpCall","$rootScope",function(e,t,n,o,a,i,s){var u=this,r=t.GetJsonInfo(e.current.templateUrl);i.GetMethod(r).then(function(e){u.JsonVals=e},function(e){console.log(e.statusText),$log.info(e)});var l=JSON.parse(a.encodelogval(sessionStorage.UserInfo));u.reload=function(){e.reload()},u.updatebtn=!1,u.createbtn=!0;var c=n.GetScreenRights;i.GetMethod(c).then(function(e){u.userRights=e.GetScreenRightsResult},function(e){console.log(e.statusText),$log.info(e)});var c=n.GetLookup,d={lookup_id:"1"};i.PostMethod(c,d).then(function(e){u.menuTypes=e},function(e){console.log(e.statusText),$log.info(e)}),u.copyTText=function(e){u.MidMenuItem.page_url=o("lowercase")(e).replace(/ +(?=)/g,"-")},u.getTopVal=function(){var e=n.GetNavigationControl;i.GetMethod(e).then(function(e){u.menuNav=JSON.parse(e.GetNavigationControlResult)},function(e){$log.info(e)})},u.getTopVal(),u.createmidnav=function(e){u.master={};var t=new Object;t.menu_name=e.menu_name,t.page_url=e.page_url,t.controller=e.controller||"",t.lookup_value_id=e.lookup_value_id,t.user_rights_id=e.user_rights_id,t.page_title=e.page_title,t.meta_description=e.meta_description,t.page_name=e.page_name||"",t.sequence_no=e.sequence_no||"",t.header="2",t.user_id=l.UserId,e.is_active?t.is_active=e.is_active:t.is_active="N";var o=n.CreateTopNavigation;i.PostMethod(o,t).then(function(e){1==e?(s.demoroute(),s.update(),u.msg="Navigation Created successfully.",u.MidMenuItem=angular.copy(u.master),u.getTopVal()):e==-1&&(u.msg="sequence number already exists , please try another !")},function(e){console.log(e.statusText),$log.info(e)})},u.updatearticleinfo=function(e){u.isClicked=!1,u.msg="",u.MidMenuItem=e,u.updatebtn=!0,u.createbtn=!1},u.updatemidnav=function(e){var t=new Object;t.user_id=l.UserId,t.menu_id=e.menu_id,t.menu_name=e.menu_name,t.page_url=e.page_url,t.sequence_no=e.sequence_no,t.page_name=e.page_name,t.lookup_value_id=e.lookup_value_id,t.user_rights_id=e.user_rights_id,t.is_active=e.is_active,t.page_title=e.page_title,t.meta_description=e.meta_description,t.controller=e.controller||"";var o=n.UpdateTopNavigation;i.PostMethod(o,t).then(function(e){1==e?(s.demoroute(),s.update(),u.msg="navigation updated successfully",u.isClicked=!0):e==-1&&(u.msg="sequence number already exists , please try another !")},function(e){console.log(e.statusText),$log.info(e)})}}]);