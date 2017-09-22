var $routeProviderReference;
var RouteList;
app.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    $routeProviderReference = $routeProvider;
    $routeProvider.caseInsensitiveMatch  = true;
	$locationProvider.html5Mode(true);
}]); 

app.run(['$route','$http','myAppURLs','$rootScope',function ($route, $http,myAppURLs,$rootScope) {  
    $rootScope.images = {};    
        var url=myAppURLs.GetRouteList;        
            $http.get(url).success(function (data) {
                var finalrouteval=data.GetRouteListResult;          
                var iLoop = 0, currentRoute;
                for (iLoop = 0; iLoop < finalrouteval.length; iLoop++) {
                    currentRoute = finalrouteval[iLoop]; 
                    var routeName = "/" + currentRoute.navigation_url;
                    $routeProviderReference.when(routeName, {
                        templateUrl: "Src/partials/"+currentRoute.template_name,
                        controller:currentRoute.controller_name,
                        controllerAs:"vm"
                    })
                    .otherwise({redirectTo:'/'});                 
                }
                $route.reload();
            });              
    }]);