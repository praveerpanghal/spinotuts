app.controller("ChildNavigationCtrl",["$route","JsonDataService","myAppURLs","$filter","$location","EncodeService","httpCall","$rootScope",function(e,t,n,o,a,i,r,s){var c=this,l=t.GetJsonInfo(e.current.templateUrl);r.GetMethod(l).then(function(e){c.JsonVals=e},function(e){console.log(e.statusText),$log.info(e)}),c.reload=function(){e.reload()},c.updatebtn=!1,c.createbtn=!0;var u=n.GetScreenRights;r.GetMethod(u).then(function(e){c.userRights=e.GetScreenRightsResult},function(e){console.log(e.statusText),$log.info(e)});var u=n.GetParentNavigationList;r.GetMethod(u).then(function(e){c.parentNavResult=e.GetParentNavigationListResult},function(e){console.log(e.statusText),$log.info(e)});var g=JSON.parse(i.encodelogval(sessionStorage.UserInfo));c.copyTText=function(e){c.ChildMenuItem.category_url=o("lowercase")(e).replace(/ +(?=)/g,"-")},c.getTopVal=function(){var e=n.GetNavigationControl;r.GetMethod(e).then(function(e){c.menuNav=JSON.parse(e.GetNavigationControlResult)},function(e){console.log(e.statusText),$log.info(e)})},c.getTopVal(),c.createchildnav=function(e){c.master={};var t=new Object;t.category_name=e.category_name,t.sequence_no=e.sequence_no||"0",t.controller=e.controller||"",t.category_url=e.category_url,t.page_name=e.page_name||"",t.parent_menu_id=e.parent_menu_id,t.user_rights_id=e.user_rights_id,t.page_title=e.page_title,t.meta_description=e.meta_description,t.user_id=g.UserId,c.ChildMenuItem.is_active?t.is_active=c.ChildMenuItem.is_active:t.is_active="N";var o=n.CreateChildNavigation;r.PostMethod(o,t).then(function(e){1==e?(s.demoroute(),s.update(),c.msg="Navigation Created successfully.",c.ChildMenuItem=angular.copy(c.master),c.getTopVal()):e==-1&&(c.msg="sequence number already exists , please try another !")},function(e){console.log(e.statusText),$log.info(e)})},c.updatearticleinfo=function(e){c.isClicked=!1,c.msg="",c.ChildMenuItem=e,c.updatebtn=!0,c.createbtn=!1},c.updatechildnav=function(e){var t=new Object;t.user_id=g.UserId,t.category_id=e.category_id,t.category_name=e.category_name,t.sequence_no=e.sequence_no,t.category_url=e.category_url,t.page_name=e.page_name||"",t.user_rights_id=e.user_rights_id,t.is_active=e.is_active,t.parent_menu_id=e.parent_menu_id,t.page_title=e.page_title,t.meta_description=e.meta_description,t.controller=e.controller||"";var o=n.UpdateChildNavigation;r.PostMethod(o,t).then(function(e){1==e?(s.demoroute(),s.update(),c.msg="navigation updated successfully",c.isClicked=!0):e==-1&&(c.msg="sequence number already exists , please try another !")},function(e){console.log(e.statusText),$log.info(e)})}}]);