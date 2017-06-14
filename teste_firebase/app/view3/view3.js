'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', 'firebase', '$firebaseArray',
function($scope, firebase, $firebaseArray) {
  var ref = firebase.database().ref().child("Eventos");

  $scope.evento = {};
  $scope.eventos = $firebaseArray(ref);

  $scope.adicionarEvento = function() {
    $scope.eventos.$add($scope.evento);
    $scope.evento = {};
  };

}]);