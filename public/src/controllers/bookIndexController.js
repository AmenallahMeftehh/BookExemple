app.controller('bookIndexController', ['$scope', '$http', function($scope, $http){


  var getAll = function () {
      $http.get('/api/books').success(function (response) {
          $scope.books = response;
          console.log('i received the data i requested');
      });
  };
  getAll();
  $scope.maxSize = 5;
  $scope.currentPage = 1;
  $scope.totalItems = 0;

  $scope.recup = function (id) {
      console.log(id);
      $http.get('/api/books/' + id).success(function (response) {
        $scope.book = response;
        console.log($scope.book);

      });
    };
    $scope.addBook = function () {
        console.log($scope.book);
        $http.post('/api/books', $scope.book).success(function (response) {
            console.log(response);
            getAll();
          $scope.book.title="";
          $scope.book.author="";
          $scope.book.genre="";

        });
    };
    $scope.deleteBook = function (id) {
        console.log(id);
        $http.delete('/api/books/' +id).success(function (response) {
          getAll();
        })
    };
    // fonction pour mettre a jour un livre
    $scope.update = function (book) {
        console.log($scope.book._id);
        $http.put('/api/books/' + $scope.book._id, $scope.book).success(function (response) {
            getAll();
            $scope.book = "";

        });
    };
    //    fonction deselectionner un livre
    $scope.deselect = function () {
        $scope.book = "";
    }



}]);
