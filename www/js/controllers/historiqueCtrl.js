angular.module('starter.controllers')

    .controller('HistoriqueCtrl', function ($scope) {
    	$scope.userId = 1;
    	$scope.plateaux = [{
			id: 1,
			userId: 1,
			itemId: "BIGBURGER",
			date: "29 janvier 2017",
			tauxGlucide: "500g" 
		}];
    });