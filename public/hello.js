function Hello($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(d) {
            $scope.greeting = d;
        });
}
