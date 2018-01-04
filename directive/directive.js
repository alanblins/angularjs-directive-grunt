(function(angular) {
  'use strict';
angular.module('docsTemplateUrlDirective', ["templates-main"])
  .directive('myCustomer', function() {
    return {
      restrict: 'E',
      scope: {
       customerInfo: '=info'
      },
      templateUrl: 'tpl/my-customer.tpl.html'
    };
  });
})(window.angular);
