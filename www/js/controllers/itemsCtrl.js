angular.module('starter.controllers').controller('ItemsCtrl', function ($scope, $rootScope, $stateParams) {

    var dataItems = $rootScope.data.items;
    var currentRestoId = "1";//to delete for prod (uncomment under line)
    //var currentRestoId = $stateParams.restoId;

    //item example
    // {
    //     "id": "1",
    //     "nom": "BigMac",
    //     "type": "1",
    //     "glucideLent": "",
    //     "glucideRapide": "",
    //     "restoId": "1",
    //     "photoLink": "./img/items/bigmac.png"
    // }

    $scope.plate = [];

    $scope.items = dataItems.filter(function (item) { return item.restoId === currentRestoId });

    $scope.addInPlate = function (item) {
        $scope.plate.push(item);
    };

    $scope.deleteItem = function (item) {
        angular.forEach($scope.plate, function (itemInPlate, key) {
            if (itemInPlate.id === item.id) {
                $scope.plate.splice(key, 1);
            }
        });
    };

});