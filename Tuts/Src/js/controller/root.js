app.config(['$routeProvider',function($routeProvider){
$routeProvider
.when('/',{templateUrl: 'partials/Home.html',controller:'HomeCtrl',controllerAs:"vm"})
.when('/ForgotSuccess',{templateUrl: 'partials/ForgotSuccess.html',controller:'ForgotSuccessCtrl',controllerAs:"vm"})
.when('/RegSuccess',{templateUrl: 'partials/RegisterSuccess.html',controller:'RegSuccessCtrl',controllerAs:"vm"})
;}]);