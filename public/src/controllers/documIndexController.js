app.controller('documIndexController', ['$scope', '$http', function($scope, $http){


  var getAll = function () {
      $http.get('/api/docums').success(function (response) {
          $scope.docums = response;
          console.log('i received the data i requested');
      });
  };
  getAll();
  $scope.maxSize = 5;
  $scope.currentPage = 1;
  $scope.totalItems = 0;

  $scope.recup = function (id) {
      console.log(id);
      $http.get('/api/docums/' + id).success(function (response) {
        $scope.docum = response;
        console.log($scope.docum);

      });
    };
    $scope.addDocum = function () {
        console.log($scope.docum);
        $http.post('/api/docums', $scope.docum).success(function (response) {
            console.log(response);
            getAll();
          $scope.docum.title="";
          $scope.docum.description="";
          $scope.book.date=Date.now;
          $scope.docum.pays="";
        });
    };
    $scope.deleteDocum = function (id) {
        console.log(id);
        $http.delete('/api/docums/' +id).success(function (response) {
          getAll();
        })
    };
    // fonction pour mettre a jour un documentaire
    $scope.update = function (docum) {
        console.log($scope.docum._id);
        $http.put('/api/docums/' + $scope.docum._id, $scope.docum).success(function (response) {
            getAll();
            $scope.docum = "";

        });
    };
    //    fonction deselectionner un documentairess
    $scope.deselect = function () {
        $scope.docum = "";
    }



}]);
