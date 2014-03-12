function classController($scope, $http, $routeParams) {
    console.log($routeParams);

    $http.get('api/v1/class/' + $routeParams.id + '?format=json').success(function(data) {
        console.log(data);
        $scope.class = data;
        $scope.students = data.students;
        $scope.title = data.title;
    })

};