

app.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log('BooksController loaded...');

    $scope.getBooks = function(){

        console.log('yo');
        $http.get('/api/books').success(function(response){
            $scope.books = response;
        });
    }
    $scope.getBook = function(){

        console.log('yo');
        $http.get('/api/books').success(function(response){
            $scope.books = response;
        });
    }


}]);
