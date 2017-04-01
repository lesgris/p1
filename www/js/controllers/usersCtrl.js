angular.module('starter.controllers')

.controller('UsersCtrl', function ($scope, $stateParams, $rootScope) {
  $scope.salut = "COUCOU";
  $scope.users = $rootScope.data.users;
});
