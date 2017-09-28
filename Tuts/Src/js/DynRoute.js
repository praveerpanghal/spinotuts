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
app.config(['$routeProvider','$locationProvider','$provide',function ($routeProvider,$locationProvider,$provide) {
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
    $routeProvider
    .when('/home', {
        templateUrl:"Src/partials/Home.html",
        controller: 'HomeCtrl',
    controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })
    .when('/login', {
        templateUrl: 'Src/partials/Login.html',
        controller: 'LoginCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })
    .when('/register', {
        templateUrl: 'Src/partials/Register.html',
        controller: 'RegisterCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })
    .when('/write-for-us', {
        templateUrl: 'Src/partials/Write.html',
        controller: 'WriteusCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })
    .when('/tutorials/:category/:categoryid', {
        templateUrl: 'Src/partials/ArticleList.html',
        controller: 'ArticleListCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })
    .when('/tutorials/:category/:categoryid/:title', {
        templateUrl: 'Src/partials/ArticleDetails.html',
        controller: 'ArticleDetailsCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })      
    .when('/latest-articles', {
        templateUrl: 'Src/partials/ArticleList.html',
        controller: 'ArticleListCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })
    .when('/latest-articles/:category/:categoryid/:title', {
        templateUrl: 'Src/partials/ArticleDetails.html',
        controller: 'ArticleDetailsCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })
    .when('/interview-questions/:category/:categoryid', {
        templateUrl: 'Src/partials/PostedInterviewQuestions.html',
        controller: 'GetInterviewQuestionsCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })
    .when('/e-books/:category/:categoryid', {
        templateUrl: 'Src/partials/Ebooks.html',
        controller: 'EbooksCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })
    .when('/e-books/:category/:categoryid/:title', {
        templateUrl: 'Src/partials/EbookInfo.html',
        controller: 'EbookInfoCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })
    .when('/blogs', {
        templateUrl: 'Src/partials/Blogs.html',
        controller: 'BlogCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })
    .when('/blogs/:bloginfo', {
        templateUrl: 'Src/partials/Bloginfo.html',
        controller: 'BloginfoCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })
    .when('/video', {
        templateUrl: 'Src/partials/video.html',
        controller: 'VideoCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(1); } }
    })
    .when('/username/change-password/:id', {
        templateUrl: 'Src/partials/UserPassword.html',
        controller: 'ProfileCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/username/profile/:id', {
        templateUrl: 'Src/partials/UserProfile.html',
        controller: 'ProfileCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/username/add-blog/:id', {
        templateUrl: 'Src/partials/AddBlogs.html',
        controller: 'AddBlogCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/username/logout/:id', {
        templateUrl: 'Src/partials/Login.html',
        controller: 'LogoutCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/post-content/article-submission/:id', {
        templateUrl: 'Src/partials/PostArticle.html',
        controller: 'PostArticleCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/post-content/interview-questions/:id', {
        templateUrl: 'Src/partials/InterviewQuestions.html',
        controller: 'InterviewQuestionsCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/post-content/ebooks-chapter/:id', {
        templateUrl: 'Src/partials/EbookChapterPost.html',
        controller: 'EbooksChapterPostCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/post-content/ebooks-content/:id', {
        templateUrl: 'Src/partials/EbookPost.html',
        controller: 'EbooksPostCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/administrator/articles-report/:id', {
        templateUrl: 'Src/partials/ArticlesReport.html',
        controller: 'ArticlesReportCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/administrator/user-control/:id', {
        templateUrl: 'Src/partials/UserControls.html',
        controller: 'UserControlsCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/administrator/exception-log/:id', {
        templateUrl: 'Src/partials/Logs.html',
        controller: 'LogCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/administrator/menu-control/top-navigation/:id', {
        templateUrl: 'Src/partials/Navigation.html',
        controller: 'NavigationCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/administrator/menu-control/middle-navigation/:id', {
        templateUrl: 'Src/partials/MiddleNavigation.html',
        controller: 'MiddleNavigationCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/administrator/menu-control/child-navigation/:id', {
        templateUrl: 'Src/partials/ChildNavigation.html',
        controller: 'ChildNavigationCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .when('/administrator/menu-control/sub-child-navigation/:id', {
        templateUrl: 'Src/partials/SubChild.html',
        controller: 'SubChildNavigationCtrl',
        controllerAs:"vm",title: 'Spinotuts website' , description: 'Spinotuts website Description', 
        resolve: { permission: function(authorizationService, $route) { return authorizationService.permissionCheck(3); } }
    })
    .otherwise({ redirectTo: '/home' });
    $routeProvider.caseInsensitiveMatch  = true;
    $locationProvider.html5Mode(true);
}]);
app.run(['$rootScope',function ($rootScope) {  
    $rootScope.images = {}; 
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $rootScope.description = current.$$route.description;
    });                
}]);