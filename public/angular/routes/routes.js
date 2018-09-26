myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './views/home-view.html',
            controller: 'homeController',
            controllerAs: 'homePage'
        }).
        otherwise({
            templateUrl: './views/404.html'
        });
}]);