angular.module('starter.controllers')

.controller('UsersCtrl', function ($scope, $stateParams, $rootScope, $state) {
  $scope.salut = "COUCOU";
  $scope.users = $rootScope.data.users;
  $scope.uisref = function(view){
    console.log("LOLOLOLOL");
    $state.go(view);
  };
});
