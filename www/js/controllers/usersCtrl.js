angular.module('starter.controllers')

  .controller('UsersCtrl', function ($scope, $stateParams, $rootScope, $state) {
    $scope.salut = "COUCOU";
    $scope.users = $rootScope.data.users;
    $scope.test = function (ma) {
      alert(ma);
      $state.go('app.Infos');
    };
  });
