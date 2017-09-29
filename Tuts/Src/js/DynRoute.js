var routeForUnauthorizedAccess = '/home'; 
app.factory('authorizationService', function ($resource, $q, $rootScope, $location,permissionService,EncodeService) {
    return {
        permissionModel: {
            permission: {},
            isPermissionLoaded: false
        },       
        permissionCheck: function (userrole) {            
            var roleCollection=1;
            var deferred = $q.defer(); 
            var parentPointer = this;
            if(sessionStorage.UserInfo){
                var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));
                roleCollection=profile.UserRightsId;
                var islogedin = true;
            }
            if (this.permissionModel.isPermissionLoaded) {
                this.getPermission(this.permissionModel, roleCollection,userrole, deferred);
            } else {
                var result=permissionService.getPermissionList(roleCollection);
                parentPointer.getPermission(result, roleCollection,userrole, deferred);
            }
            return deferred.promise;
        },
        getPermission: function (permissionModel, roleCollection,userrole, deferred) {
            var ifPermissionPassed = '';
            var islogedin=true;
            if(permissionModel){
                ifPermissionPassed = true;
            }else{
                if(roleCollection=='1'&& userrole==roleCollection){ 
                    ifPermissionPassed = true;
                }
                else{
                    ifPermissionPassed = false;
                }
            }
            if (!ifPermissionPassed) {
                $location.path(routeForUnauthorizedAccess);
                deferred.resolve();
            } else {
                deferred.resolve();
            }
        }
    };
});
var $routeProviderReference;
var RouteList;
app.config(['$routeProvider','$locationProvider','$provide',function ($routeProvider,$locationProvider,$provide) {
    $routeProviderReference = $routeProvider;
    $routeProvider.caseInsensitiveMatch  = true;
    $locationProvider.html5Mode(true);
    
    $provide.factory('permissionService', function() {
        return{
            getPermissionList:function(role){
                var isPermissionLoaded='';
                if(role==1){
                    isPermissionLoaded = false;
                }
                else
                {
                    isPermissionLoaded = true;
                }
                return isPermissionLoaded;
            }
        };
    });
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
                controllerAs:"vm",
                title: currentRoute.page_title,
                description:currentRoute.meta_description,
                resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(currentRoute.user_rights_id); } }
            })
            .otherwise({redirectTo:'/'});        
        }
        $route.reload();
    });
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $rootScope.description = current.$$route.description;
    });
}]);