'use strict';

angular.module('iStudyThai', [
    'ngRoute',
    'iStudyThai.security'
]);

angular.module('iStudyThai').config(['$routeProvider', function ($routeProvider) {

    var access = securityConfig.accessLevels;

    $routeProvider
      .when('/', {
        templateUrl: '../views/main.html',
        controller: 'MainCtrl',
        access: access.public
      })
      .when('/home', {
        templateUrl: '../views/home.html',
        controller: 'MainCtrl',
        access: access.public
      })
      .when('/projects', {
        templateUrl: 'scripts/project/project.html',
        controller: 'ProjectCtrl',
        access: access.user
      })
      .when('/projects/:id', {
        templateUrl: 'scripts/project/project-detail.html',
        controller: 'ProjectDetailCtrl',
        access: access.user
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

angular.module('iStudyThai').run(['$rootScope','$location','security', function($rootScope, $location, security) {
    // Get the current user when the application starts
    // (in case they are still logged in from a previous session)
    security.requestCurrentUser();

    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (!security.authorize(next.access)) {
            $location.path('/');
        }
    });

}]);

