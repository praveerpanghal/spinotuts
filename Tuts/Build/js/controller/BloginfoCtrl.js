app.controller("BloginfoCtrl",["$route","JsonDataService","$location","myAppURLs","httpCall",function(o,t,n,l,e){var i=this,s=t.GetJsonInfo(o.current.templateUrl);e.GetMethod(s).then(function(o){i.JsonVals=o},function(o){console.log(o.statusText),$log.info(o)});var a=l.GetSingleBlog,c={alias_url:n.path().split("/")[2]};e.PostMethod(a,c).then(function(o){i.singlebloginfo=o[0]},function(o){console.log(o.statusText),$log.info(o)})}]);