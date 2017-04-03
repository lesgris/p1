angular.module('starter.controllers')
.controller('RepasCtrl', function ($scope) {
	$scope.repas=[{"name":"petit déjeuner","GlucideLent":5,"GlucideRapide":5},{"name":"Déjeuner"},{"name":"Goûter"},{"name":"Diner"}];
});