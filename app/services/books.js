app.factory('books', ['$http', function($http) {
    return $http.get('app/services/books.json')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        });
}]);