app.controller("DisapprovedArticleListCtrl",["$scope","$localStorage","myAppURLs","$location","ArticlesService","JsonDataService","$route","httpCall",function(e,t,o,n,i,l,c,r){var s=l.GetJsonInfo(c.current.templateUrl);r.GetMethod(s).then(function(t){e.JsonVals=t},function(e){$log.info(e)}),e.cLists=JSON.parse(localStorage.cList);var a=o.GetArticlesInformation;i.GetAllArticles(a).then(function(t){""!==t.GetArticlesInformationResult?e.articles=t.GetArticlesInformationResult:$log.info(t)},function(e){$log.info(e)}),e.selection=[],e.MultipleSelection=function(t){var o=e.selection.indexOf(t);o>-1?e.selection.splice(o,1):e.selection.push(t)},e["delete"]=function(){var t={article_ids:e.selection.toString(),user_id:sessionStorage.UserInfo},n=o.RemoveArticles;i.DeleteArticles(n,t).then(function(e){""!==e?location.reload():$log.info(e)},function(e){$log.info(e)})}}]);