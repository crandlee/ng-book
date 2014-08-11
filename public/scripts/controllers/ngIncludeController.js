angular.module('myApp').controller('ngIncludeController', function($scope) {

    $scope.items = ['Selection 1', 'Selection 2'];
    $scope.selection = $scope.items[0];
});