'use strict';

angular.module('angularLeapUi')
  .directive('leapOverlay', function (NormalizePointables) {
    return {
      restrict: 'EACM',
      transclude: true,
      controller: function () {},
      link: function (scope, element, attrs, controller) {

        scope.offsetHeight = controller.offsetHeight = element[0].offsetHeight;
        scope.offsetWidth = controller.offsetWidth = element[0].offsetWidth;


        scope.getRelativePosition = NormalizePointables.get();


        var getElementBehindPoint = function (behind, x, y) {
          var originalDisplay = behind.css('display');
          behind.css('display', 'none');

          var element = angular.element($document[0].elementFromPoint(x, y));

          behind.css('display', originalDisplay);

          return element;
        };


      },
      templateUrl: 'src/view/leapOverlay.tpl.html'
    };
  });