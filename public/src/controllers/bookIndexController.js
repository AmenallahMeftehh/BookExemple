app.controller('bookIndexController', ['$scope', '$http', function($scope, $http){


  var refresh = function () {
      $http.get('/api/books').success(function (response) {
          $scope.books = response;
          console.log('i received the data i requested');
      });
  };
  refresh();
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
            refresh();
          $scope.book.title="";
          $scope.book.author="";
          $scope.book.genre="";

        });
    };
    // fonction ajouter un livre
    $scope.deleteBook = function (id) {
        console.log(id);
        $http.delete('/api/books/' +id).success(function (response) {
          refresh();
        })
    };
    // fonction pour mettre a jour un livre
    $scope.update = function () {
        console.log($scope.book._id);
        $http.put('/api/books/' + $scope.book._id, $scope.book).success(function (response) {
            refresh();
            $scope.book = "";

        });
    };
    //    fonction deselectionner un livre
    $scope.deselect = function () {
        $scope.book = "";
    }



}]);
