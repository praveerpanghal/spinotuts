app.controller("NavigationCtrl",["$route","JsonDataService","myAppURLs","$filter","$location","EncodeService","httpCall","$rootScope",function(e,t,o,n,a,i,s,u){var r=this,l=t.GetJsonInfo(e.current.templateUrl);s.GetMethod(l).then(function(e){r.JsonVals=e},function(e){console.log(e.statusText),$log.info(e)});var c=JSON.parse(i.encodelogval(sessionStorage.UserInfo));r.reload=function(){e.reload()},r.updatebtn=!1,r.createbtn=!0;var p=o.GetScreenRights;s.GetMethod(p).then(function(e){r.userRights=e.GetScreenRightsResult},function(e){console.log(e.statusText),$log.info(e)});var p=o.GetLookup,_={lookup_id:"1"};s.PostMethod(p,_).then(function(e){r.menuTypes=e},function(e){console.log(e.statusText),$log.info(e)}),r.copyTText=function(e){r.TopMenuItem.page_url=n("lowercase")(e).replace(/ +(?=)/g,"-")},r.getTopVal=function(){var e=o.GetNavigationControl;s.GetMethod(e).then(function(e){r.menuNav=JSON.parse(e.GetNavigationControlResult)},function(e){console.log(e.statusText),$log.info(e)})},r.getTopVal(),r.createtopnav=function(e){r.master={};var t=new Object;t.menu_name=e.menu_name,t.page_url=e.page_url,t.controller=e.controller||"",t.lookup_value_id=e.lookup_value_id,t.user_rights_id=e.user_rights_id,t.page_title=e.page_title,t.meta_description=e.meta_description,t.page_name=e.page_name||"",t.sequence_no=e.sequence_no||"",t.header="1",t.user_id=c.UserId,e.is_active?t.is_active=e.is_active:t.is_active="N";var n=o.CreateTopNavigation;s.PostMethod(n,t).then(function(e){1==e?(u.demoroute(),u.update(),r.msg="Navigation Created successfully.",r.TopMenuItem=angular.copy(r.master),r.getTopVal()):e==-1&&(r.msg="sequence number already exists , please try another !")},function(e){console.log(e.statusText),$log.info(e)})},r.updatearticleinfo=function(e){r.isClicked=!1,r.msg="",r.TopMenuItem=e,r.updatebtn=!0,r.createbtn=!1},r.updatetopnav=function(e){var t=new Object;t.user_id=c.UserId,t.menu_id=e.menu_id,t.menu_name=e.menu_name,t.page_url=e.page_url,t.sequence_no=e.sequence_no,t.page_name=e.page_name,t.page_title=e.page_title,t.meta_description=e.meta_description,t.lookup_value_id=e.lookup_value_id,t.user_rights_id=e.user_rights_id,t.is_active=e.is_active,t.controller=e.controller||"";var n=o.UpdateTopNavigation;s.PostMethod(n,t).then(function(e){1==e?(u.demoroute(),u.update(),r.msg="navigation updated successfully"):e==-1&&(r.msg="sequence number already exists , please try another !"),r.isClicked=!0},function(e){console.log(e.statusText),$log.info(e)})}}]);