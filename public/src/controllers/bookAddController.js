app.controller('addBookController',['$scope', '$http',function($scope,$http){

  // fonction ajouter un livre
  $scope.addBook = function () {
      console.log($scope.book);
      $http.post('/api/books', $scope.book).success(function (response) {
          console.log(response);
      });
  };
  $scope.id = $routeParams.id;
  $scope.edit = function (id) {
      console.log(id);
      $http.get('/api/books/' + id).success(function (response) {
        $scope.book=response;
      })
    };
  // fonction ajouter un livre
  $scope.deleteBook = function (id) {
      console.log(id);
      $http.delete('/api/books' +id).success(function (response) {
      })
  };


}]);
