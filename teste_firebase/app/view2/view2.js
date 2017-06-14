'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'firebase', '$firebaseArray',
function($scope, firebase, $firebaseArray) {
  var ref = firebase.database().ref().child("veiculos");

  $scope.veiculo = {};
  $scope.veiculos = $firebaseArray(ref);

  $scope.adicionarVeiculo = function() {
    $scope.veiculos.$add($scope.veiculo);
    $scope.veiculo = {};
  };

}]);