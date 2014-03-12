function studentController($scope, $http, RocketSpace) {
    console.log(RocketSpace.studentList);
    $scope.instructor = RocketSpace.angular_instructor;

    $http.get('api/v1/student/?format=json').success(function(data) {
//        console.log(data);
    }).error(function(data){
            // This code will execute if our GET fails
        });

    $scope.user = {"klass": "/api/v1/class/1/", "projects": []};

    $scope.addStudent = function() {
        console.log($scope.user);
        alert("Wait");
        $http.post('api/v1/student/', $scope.user).success(function() {
            console.log("Sent");
        });
    }
};