'use strict';

angular.module('iStudyThai')
  .controller('MainCtrl', ['$scope', 'security', function ($scope, security) {

        $scope.isAuthenticated = security.isAuthenticated;

  }]);