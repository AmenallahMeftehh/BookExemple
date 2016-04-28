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
    .when('/add',{
      templateUrl: 'public/src/templates/add.html',
      controller: 'addBookController'
    })
    .when('/details/:id',{
      templateUrl: 'public/src/templates/details.html',
      controller: 'detailBookController'
    })
    .when('/edit/:id',{
      templateUrl: 'public/src/templates/edit.html',
      controller: 'bookEditController'
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
