function MyCtrl( $scope, $http ) {
    $scope.name = "Mattias";

    $scope.Click = function() {
        $http.get( "http://api.icndb.com/jokes/random?escape=javascript").then( function(response) {
            $scope.data = response.data;
        });
    }
}