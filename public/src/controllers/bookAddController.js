app.controller('addBookController',['$scope', '$http',function($scope,$http){

  // fonction ajouter un livre
  $scope.addBook = function () {
      console.log($scope.book);
      $http.post('/Books', $scope.book).success(function (response) {
          console.log(response);

      });
  };

}]);
