app.controller('detailBookController',['$scope', '$http','$routeParams',function($scope,$http,$routeParams){


  $scope.recup = function (id) {
      console.log(id);
      $scope.book.id =$routeParams.itemId;
      $http.get('/api/books/' + id).success(function (response) {

        console.log(response);

      });
    };
  // fonction ajouter un livre
  $scope.deleteBook = function (id) {
      console.log($routeParams.id);
      $http.delete('/api/books/' +id).success(function (response) {
      })
  };

}]);
