(function(angular) {
  'use strict';
angular.module('app', ["docsTemplateUrlDirective"])
  .controller('Controller', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Alan',
      address: 'oconnel street'
    };
  }])
})(window.angular);
