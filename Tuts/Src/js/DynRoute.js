app.service('authorizationService',['$resource','$q','$rootScope','$location','permissionService','EncodeService','$http', 
function ($resource, $q, $rootScope, $location,permissionService,EncodeService,$http) {
    var permissionModel= {
        permission: {},
        isPermissionLoaded: false};
        this.permissionCheck= function (userrole) {
            var data = new Object();              
            data.title = userrole.page_title;
            data.description = userrole.meta_description;      
            $http({
                url: '/sendinfo',
                method: 'POST',
                data: data
            }).then(function (httpResponse) {
                //    console.log('response:', httpResponse.data);
            });  
            var roleCollection=1;
            var deferred = $q.defer(); 
            var parentPointer = this;
            if(sessionStorage.UserInfo){
                var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));
                roleCollection=profile.UserRightsId;
                var islogedin = true;
            }
            if (permissionModel.isPermissionLoaded) {
                this.getPermission(permissionModel, roleCollection,userrole, deferred);
            } else {
                var result=permissionService.getPermissionList(roleCollection);
                parentPointer.getPermission(result, roleCollection,userrole, deferred);
            } 
       
            return deferred.promise;
        }
        this.getPermission= function (permissionModel, roleCollection,userrole, deferred) {
            var ifPermissionPassed = '';
            var islogedin=true;
            if(permissionModel){
                ifPermissionPassed = true;
            }else{
                if(roleCollection=='1'&& userrole.user_rights_id==roleCollection){ 
                    ifPermissionPassed = true;
                }
                else{
                    ifPermissionPassed = false;
                }
            }
            if (!ifPermissionPassed) {                
                $location.path('/home');                
                deferred.resolve();
            } else {                
                document.title=userrole.page_title;
                document.querySelector('meta[name="description"]').setAttribute("content", userrole.meta_description);
                deferred.resolve();
            }
        }
    }]);
    app.run(['$route','$http','$rootScope','authorizationService','permissionService',function ($route, $http,$rootScope,authorizationService,permissionService) {  
        $rootScope.images = {};    
        $rootScope.title ='';
        $rootScope.description='';
        $rootScope.update=function(){
            $http({
                url: '/GetJsonList'
            }).then(function (httpResponse) {
            }); 
        }
        $rootScope.demoroute=function(){
            permissionService.title_value().then(function(response){
                var finalroutevals=response.data.GetRouteListResult;
                finalroutevals.forEach(function(finalrouteval, index) {            
                    var routeName = "/" + finalrouteval.navigation_url;
                    $routeProviderReference.when(routeName, {
                        templateUrl: "partials/"+finalrouteval.template_name,
                        controller:finalrouteval.controller_name,
                        controllerAs:"vm",
                        resolve: {                            
                        permission:['authorizationService', function ( authorizationService) {                            
                            return authorizationService.permissionCheck(finalrouteval);
                        }]    
                        }
                    })
                    .otherwise({redirectTo:'/'});
                });
                $route.reload();
                
            });   
        }        
        $rootScope.demoroute();
    }]);
    var $routeProviderReference;
    app.config(['$routeProvider','$locationProvider','$provide',function ($routeProvider,$locationProvider,$provide) {
        $routeProviderReference = $routeProvider;
        $routeProvider.caseInsensitiveMatch  = true;
        $locationProvider.html5Mode(true);
    }]);
        
    app.service('permissionService',['$http','$q','myAppURLs', function($http,$q,myAppURLs) {
        
            this.getPermissionList=function(role){
                var isPermissionLoaded='';
                if(role==1){
                    isPermissionLoaded = false;
                }
                else
                {
                    isPermissionLoaded = true;
                }
                return isPermissionLoaded;
            },
            this.title_value=function(){
                var def = $q.defer();
                var finalroutevals={};
                var promise=$http.get(myAppURLs.GetRouteList).then(function (data) {                        
                    finalroutevals=data.data.GetRouteListResult;  
                    def.resolve(data);                      
                }); 
                return def.promise;                  
                }
        
    }]);