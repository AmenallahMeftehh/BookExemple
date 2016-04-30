var app = angular.module('app',['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    //routes for home
    .when('/home',{
      templateUrl: 'public/src/templates/home.html',
        access: {restricted: true}

    })
    .when('/login',{
      templateUrl: 'public/src/templates/login.html',
      controller:'LoginCtrl',
        access: {restricted: false}
    })
    .when('/register',{
      templateUrl: 'public/src/templates/register.html',
      controller:'RegisterCtrl',
      access: {restricted: false}
    })
    .when('/logout', {
        controller : 'LoginCtrl',
        access: {restricted: true}
    })
    //routes for books
    .when('/show',{
      templateUrl: 'public/src/templates/show.html',
      controller: 'bookIndexController',
       access: {restricted: true}
    })
    .when('/docum',{
      templateUrl:'public/src/templates/docum.html',
      controller:'documIndexController',
        access: {restricted: true}
    })

    .otherwise({redirectTo: '/home'});

}]);
window.fbAsyncInit = function() {
    FB.init({
      appId      : '485968178269032',
           xfbml      : true,
      version    : 'v2.6'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


   app.run(function ($rootScope, $location, $route, AuthService) {
     $rootScope.$on('$routeChangeStart',
         function (event, next, current) {
             AuthService.getUserStatus()
                 .then(function(){
                     if (next.access.restricted && !AuthService.isLoggedIn()){
                         $location.path('/login');
                         $route.reload();
                     }
                 });
         });
 });
