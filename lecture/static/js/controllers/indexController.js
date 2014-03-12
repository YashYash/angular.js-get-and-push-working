function indexController($scope, $http, RocketSpace) {

    console.log(RocketSpace.angular_instructor);
	console.log("indexController");

    $scope.classes = [];

    // Get Student
     $http.get('api/v1/student/?format=json').success(function(data) {
         console.log(data);
        console.log(data.objects);
        $scope.students = data.objects;
        RocketSpace.studentList = $scope.students;
    });

    $http.get('api/v1/class/?format=json').success(function(data) {
        console.log(data.objects);
        $scope.classes = data.objects;

    });



};