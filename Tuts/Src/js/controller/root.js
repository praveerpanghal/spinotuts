app.config(['$routeProvider',function($routeProvider){
$routeProvider
.when('/',{templateUrl: 'Src/partials/Home.html',controller:'HomeCtrl',controllerAs:"vm"})
.when('/ForgotSuccess',{templateUrl: 'Src/partials/ForgotSuccess.html',controller:'ForgotSuccessCtrl',controllerAs:"vm"})
.when('/RegSuccess',{templateUrl: 'Src/partials/RegisterSuccess.html',controller:'RegSuccessCtrl',controllerAs:"vm"})
;}]);