angular.module('starter.controllers').controller('InfosCtrl', function($scope, $stateParams, $rootScope) {
    $scope.Infos={};
    $scope.users = $rootScope.data.users;
    $scope.protocoles = $rootScope.data.users[1].protocole;
});

/*
Chercher ng-repeat !
 $routescope.repas = user.repas
 $routescope.prénom = user.prénom */