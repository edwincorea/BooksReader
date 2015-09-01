app.controller('BookshelfController', ['$scope', function($scope) {

}]);

app.controller('BookshelfController', ['$scope', 'books', function($scope, books) {
    books.success(function(data) {
        $scope.myBooks = data;
    });
}]);