var app = angular.module('window', [])
    app.controller('myController', ['$scope', '$window', function($scope, $window) {
      $scope.greeting = 'Test';
      $scope.doGreeting = function(greeting) {
        $window.alert(greeting);
      };
    }]);
