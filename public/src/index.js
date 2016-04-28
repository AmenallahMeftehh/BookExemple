var app = angular.module('app',['ngRoute', 'ui.bootstrap']).
config(['$routeProvider', function($routeProvider){
  $routeProvider
    //routes for home
    .when('/home',{
      templateUrl: 'templates/home.html'
      // controller: 'bookIndexController'
    })
    //routes for books
    .when('/show',{
      templateUrl: 'templates/books/show.html',
      controller: 'BooksController'
    })
    .when('/add',{
      templateUrl: 'templates/books/add.html',
      controller: 'addBookController'
    })
    .when('/details/:id',{
      templateUrl: 'templates/books/details.html',
      controller: 'removeBookController'
    })
    .when('/edit/:id',{
      templateUrl: 'templates/books/edit.html',
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
