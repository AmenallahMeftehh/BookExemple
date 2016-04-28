app.controller('removeBookController',['$scope', '$http',function($scope,$http){

  // fonction ajouter un livre
  $scope.remove = function (id) {
      console.log(id);
      $http.delete('/Books/' + id).success(function (response) {

      })
  };

}]);
