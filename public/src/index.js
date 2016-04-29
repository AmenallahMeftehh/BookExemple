var app = angular.module('app',['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    //routes for home
    .when('/home',{
      templateUrl: 'public/src/templates/home.html'

    })
    //routes for books
    .when('/show',{
      templateUrl: 'public/src/templates/show.html',
      controller: 'bookIndexController'
    })
    .when('/docum',{
      templateUrl:'public/src/templates/docum.html',
      controller:'documIndexController'
    })
    //routes for sign in , sign up
    // .when('/login/signin',{
    //   templateUrl: '/app/src/templates/login/signin.html',
    //   controller: 'signInController'
    // })
    // .when('/login/signup',{
    //   templateUrl: '/app/src/templates/login/signup.html',
    //   controller: 'signUpController'
    // })
    //the case when the url don't have a rule
    .otherwise({redirectTo: '/home'});
}]);
