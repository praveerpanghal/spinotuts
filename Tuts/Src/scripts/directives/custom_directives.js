// app.factory('LogService', function() {
//     var factory = {};
//     var menuval = {};
//     var Ecval = {};
//     var val = true;
//     var rval={};
//     // factory.getVal = function() {
//     //     return val;
//     // }
//     // factory.update =function(){
//     //     val = false;
//     //     return val;
//     // }
//     // factory.rgetVal = function() {
//     //     return rval;
//     // }
//     // factory.rsetVal =function(aval){
//     //     rval = aval;
//     //     return rval;
//     // }
//     // factory.reupdate =function(){
//     //     val = true;
//     //     return val;
//     // }
//     // factory.memuupdate =function(a){
//     //     menuval = a;
//     //     return val;
//     // }
//     // factory.getmenuval = function() {
//     //     return menuval;
//     // }
//     // factory.Ecupdate =function(a){
//     //     Ecval = a;
//     //     return val;
//     // }
//     // factory.Ecget = function() {
//     //     return Ecval;
//     // }  
//     return factory;
// });
app.factory('MySimulatedSlowHTTPService', ['$q', '$timeout',function($q, $timeout) {
    var deferred = $q.defer();
    $timeout(function() {        
        deferred.reject("Could not fetch the list :-(")
    }, 3000);
    return deferred.promise;
}])

app.factory('CatService',['$rootScope','$localStorage', function($rootScope,$localStorage) {
    var factory = {};
    var Category = {};
    factory.getVal = function() {
        var ca =localStorage["cList"];
        
        if(ca!=typeof ca != 'object'){
            return ca;
        } 
        else{
            Category= JSON.parse(localStorage["cList"]);
            return Category;
        }       
    }
    factory.update =function(a){
        Category = a;
        localStorage.setItem('cList', JSON.stringify(a));    
        $rootScope.$broadcast("GetCat");
        return Category;
    }
    return factory;
}]);
app.directive('nxEqual', function() {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, model) {
            if (!attrs.nxEqual) {
                console.error('nxEqual expects a model as an argument!');
                return;
            }
            scope.$watch(attrs.nxEqual, function (value) {
                model.$setValidity('nxEqual', value === model.$viewValue);
            });
            model.$parsers.push(function (value) {
                var isValid = value === scope.$eval(attrs.nxEqual);
                model.$setValidity('nxEqual', isValid);
                return isValid ? value : undefined;
            });
        }
    };
});
app.directive("datepicker", function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, elem, attrs, ngModelCtrl) {
            var updateModel = function (dateText) {
                scope.$apply(function () {
                    ngModelCtrl.$setViewValue(dateText);
                });
            };
            var options = {
                dateFormat: "dd/mm/yy",
                onSelect: function (dateText) {
                    updateModel(dateText);
                }
            };
            elem.datepicker(options);
        }
    }
});
app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file,name,uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        
        .error(function(){
        });
    }
}]);
app.factory('EncodeService', function() {
    var factory = {};
    factory.encodelogval=function(str){
        switch (str.length%4 ) {
            case 0:
            break;
            case 2:
            str += '==';
            break;
            case 3:
            str += '=';
            break;
            default:
            throw 'Illegal base64url string!';
        }
        return window.atob(str);
    }
    return factory;
});



app.factory('ButtonService', function() {
    var factory = {};
    var buttons=[];
    factory.permissionbuttons=function(str){
        buttons=[{"btn_value":"Submit","active":true}];
        // if(str==3){
        //     buttons=[
        //         {"name":"submit","btn_value":"Submit","active":true}
        //         // ,
        //         // {"name":"close","btn_value":"Close","active":true}
        //     ];
        // }
        // else{
        //     buttons=[
        //         {"name":"submit","btn_value":"Submit","active":true}
        //         // ,
        //         // {"name":"close","btn_value":"Close","active":true}
        //     ];
        // }
        return buttons;
    }
    factory.permissionbuttonsupdate=function(str,status){
        buttons=[{"btn_value":"Submit","status":"U","active":true}];
        // if(str==3){
        //     switch (status ) {
        //         case "N":
        //         buttons=[                    
        //             {"name":"update","btn_value":"Update","status":"U","active":true},
        //             {"name":"delete","btn_value":"Delete","status":"D","active":true},                     
        //             {"name":"approve","btn_value":"Approve","status":"Y","active":true},                
        //             {"name":"approval_request","btn_value":"Approval request","status":"P","active":true},
        //             // {"name":"close","btn_value":"Close","active":true},
        //             {"name":"add","btn_value":"Add New","active":true}
        //             ];
        //             break;
        //             case "P":
        //             buttons=[
        //             {"name":"update","btn_value":"Update","status":"U","active":true},
        //             {"name":"delete","btn_value":"Delete","status":"D","active":true},
        //             {"name":"approve","btn_value":"Approve","status":"Y","active":true},                                        
        //             {"name":"approval_request","btn_value":"Approval request","status":"P","active":true},
        //             // {"name":"close","btn_value":"Close","active":true},
        //             {"name":"add","btn_value":"Add New","active":true}
        //         ];
        //         break;
        //         case "Y":
        //         buttons=[                          
        //             {"name":"update","btn_value":"Update","status":"U","active":true},
        //             {"name":"delete","btn_value":"Delete","status":"D","active":true},                  
        //             {"name":"disapprove","btn_value":"DisApprove","status":"N","active":true},                    
        //             // {"name":"close","btn_value":"Close","active":true},
        //             {"name":"add","btn_value":"Add New","active":true}
        //         ];
        //         break;}
                
        //     }
        //     else{
        //         switch (status ) {
        //             case "N":
        //             buttons=[
        //                 {"name":"update","btn_value":"Update","status":"U","active":true},
        //                 {"name":"delete","btn_value":"Delete","status":"D","active":true}, 
        //                 {"name":"approval_request","btn_value":"Approval request","status":"P","active":true},
        //                 // {"name":"close","btn_value":"Close","active":true},
        //                 {"name":"add","btn_value":"Add New","active":true}];
        //                 break;
        //                 case "P":
        //                 buttons=[
        //                 {"name":"update","btn_value":"Update","status":"U","active":true},
        //                 {"name":"delete","btn_value":"Delete","status":"D","active":true},
        //                 {"name":"approve","btn_value":"Approve","status":"Y","active":true},                                        
        //                 {"name":"approval_request","btn_value":"Approval request","status":"P","active":true},
        //                 // {"name":"close","btn_value":"Close","active":true},
        //                 {"name":"add","btn_value":"Add New","active":true}
        //             ];
        //             break;
        //             case "Y":
        //             buttons=[                                       
        //                 {"name":"update","btn_value":"Update","status":"U","active":true},
        //                 {"name":"delete","btn_value":"Delete","status":"D","active":true},                  
        //                 {"name":"disapprove","btn_value":"DisApprove","status":"N","active":true},                    
        //                 // {"name":"close","btn_value":"Close","active":true},
        //                 {"name":"add","btn_value":"Add New","active":true}
        //             ];
        //             break;}
        //         }
                return buttons;
            }
            return factory;
        });