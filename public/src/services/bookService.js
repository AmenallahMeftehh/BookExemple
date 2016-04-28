app.factory('Books', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/books');
        },
    

                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(book) {
            return $http.post('/api/books', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/books/' + id);
        }
    }

}]);
