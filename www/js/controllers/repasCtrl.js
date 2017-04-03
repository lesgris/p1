angular.module('starter.controllers')
.controller('RepasCtrl', function ($scope,$rootScope) {
	$scope.protocole=$rootScope.data.users[1].protocole;
});