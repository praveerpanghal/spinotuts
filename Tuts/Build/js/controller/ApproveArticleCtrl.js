app.controller("ApproveArticleCtrl",["$scope","$http","$localStorage","myAppURLs","$rootScope","CatService","ArticlesService","$location","$route","JsonDataService","httpCall",function(t,e,o,n,r,i,l,a,c,s,f){var p=s.GetJsonInfo(c.current.templateUrl);if(f.GetMethod(p).then(function(e){t.JsonVals=e},function(t){$log.info(t)}),sessionStorage.UserName){t.cLists=JSON.parse(localStorage.cList),t.today=new Date;var u=n.GetArticlesInformation;l.ArticleList(u).then(function(e){""!==e.GetArticlesInformationResult?t.articles=e.GetArticlesInformationResult:$log.info(e)},function(t){$log.info(t)})}else a.path("/Login")}]);