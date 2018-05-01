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
                
            // $('.flyout-content').css("left",'0');
            setTimeout(function() {                
                $('.flyout-content').css("display","block");               
            }, 1000 );
                //    console.log('response:', httpResponse.data);
            });  
            
            var roleCollection=1;
            var userrightsid=0;
            var islogedin=false;
            var deferred = $q.defer(); 
            var parentPointer = this;
            if(sessionStorage.UserInfo){
                var profile = JSON.parse(EncodeService.encodelogval(sessionStorage.UserInfo));
                userrightsid=profile.UserRightsId;
                islogedin = true;
                this.getPermission('true', islogedin,roleCollection,userrole,userrightsid, deferred);
            } else {
                
                this.getPermission('false', islogedin, roleCollection,userrole,userrightsid, deferred);
            } 
       
            return deferred.promise;
        }
        this.getPermission= function (permissionModel, islogedin , roleCollection,userrole,userrightsid, deferred) {          
            // $('.flyout-content').css("display",'block');             
            var un = userrole.navigation_url.split("/")[0];            
            var ifPermissionPassed = '';  
            if(roleCollection==userrole.user_rights_id)
            {
                // $('.flyout-content').css("display",'block');
                ifPermissionPassed = true;
            }
            else if(permissionModel && islogedin){
                // $('.flyout-content').css("display",'block');
                if(un == 'username'){
                    ifPermissionPassed = true;
                }                
                else if(userrightsid < userrole.user_rights_id && un=='post-content' && userrightsid !=roleCollection ){
                    ifPermissionPassed = true;
                }
                else if( userrightsid == userrole.user_rights_id)
                {
                    ifPermissionPassed = true;
                }
                else
                {
                    ifPermissionPassed = false;
                }
            }
            else
            {
                ifPermissionPassed = false;
             
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
        
            // this.getPermissionList=function(role){
            //     var isPermissionLoaded='';
            //     if(role==1){
            //         isPermissionLoaded = false;
            //     }
            //     else
            //     {
            //         isPermissionLoaded = true;
            //     }
            //     return isPermissionLoaded;
            // },
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