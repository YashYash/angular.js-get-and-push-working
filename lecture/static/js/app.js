var app = angular.module("exampleApp", ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', { templateUrl: '/static/views/index.html', controller: 'indexController' }).
        when('/class/:id', { templateUrl: '/static/views/class.html', controller: 'classController' }).
        when('/student', { templateUrl: '/static/views/student.html', controller: 'studentController'});
}]);