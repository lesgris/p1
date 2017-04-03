angular.module('starter.controllers').controller('InfosCtrl', function($scope, $stateParams, $rootScope) {
    $scope.Infos={};
    if (!$rootScope.userId || $rootScope.userId === -1) {
        console.log("WELELE");
        $scope.user = {
			"id": ""+$rootScope.data.users.length,
			"prenom": "",
			"protocole": {
				"Petit Dejeuner": {
					"glucideLent": 0,
					"glucideRapide": 0
				},
				"Dejeuner": {
					"glucideLent": 0,
					"glucideRapide": 0
				},
				"Gouter": {
					"glucideLent": 0,
					"glucideRapide": 0
				},
				"Diner": {
					"glucideLent": 0,
					"glucideRapide": 0
				}
			},
			"avatarId": "",
			"persoId": ""
		};
    }
    else {
        $scope.user = users.find(function (userId) { return users.userId === users.userId });
    }

});

/*
Chercher ng-repeat !
 $routescope.repas = user.repas
 $routescope.prénom = user.prénom */