app.controller("ArticleDetailsCtrl",["myAppURLs","$log","$route","JsonDataService","$location","EncodeService","httpCall",function(t,e,a,i,r,o,n){var s=this,l=i.GetJsonInfo(a.current.templateUrl);n.GetMethod(l).then(function(t){s.JsonVals=t},function(t){console.log(t.statusText),e.info(t)}),s.parent=r.path().split("/")[1],s.categoryname=r.path().split("/")[2],s.categoryid=r.path().split("/")[3],s.article=r.path().split("/")[4],s.getdata=function(){var a=t.GetMainArticle,i={alias_url:s.article};n.PostMethod(a,i).then(function(t){s.articledetails=JSON.parse(t.GetMainArticleResult),s.comments=s.articledetails[0].CommentsList},function(t){console.log(t.statusText),e.info(t)})},"tutorials"==s.parent?s.flag=0:s.flag=1;var c=t.GetApprovedArticleList,u=0;if(s.articlewithcategory=function(t,a,i){var o={category_url:a};n.PostMethod(c,o).then(function(e){s.articles=e.GetApprovedArticleListResult;var a=s.articles.map(function(t){return t.article_title_id}).indexOf(t);if("previous"==i){var o="/"+s.parent+"/"+s.articles[a-1].category_name.toLowerCase()+"/"+s.categoryid+"/"+s.articles[a-1].alias_url;r.path(o)}else{var n="/"+s.parent+"/"+s.articles[a+1].category_name.toLowerCase()+"/"+s.categoryid+"/"+s.articles[a+1].alias_url;r.path(n)}},function(t){console.log(t.statusText),e.info(t)})},s.articlewithoutcategory=function(t,a){var i={category_url:u};n.PostMethod(c,i).then(function(e){s.articles=e.GetApprovedArticleListResult;var i=s.articles.map(function(t){return t.article_title_id}).indexOf(t);if("previous"==a){var o="/"+s.parent+"/"+s.articles[i-1].category_name.toLowerCase()+"/"+s.articles[i-1].category_id+"/"+s.articles[i-1].alias_url;r.path(o)}else{var n="/"+s.parent+"/"+s.articles[i+1].category_name.toLowerCase()+"/"+s.articles[i+1].category_id+"/"+s.articles[i+1].alias_url;r.path(n)}},function(t){console.log(t.statusText),e.info(t)})},s.isLoggedIn=!1,sessionStorage.UserInfo){s.isLoggedIn=!0;var p=JSON.parse(o.encodelogval(sessionStorage.UserInfo))}s.submit_comment=function(a){s.master={};var i=new Object;i.UserId=p.UserId,i.article_title_id=a.article_title_id,i.comment_description=a.discription;var r=t.PostComments;n.PostMethod(r,i).then(function(t){s.comment=angular.copy(s.master),s.getdata()},function(t){console.log(t.statusText),e.info(t)})},s.getdata()}]);