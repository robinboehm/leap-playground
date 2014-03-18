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


        scope.relativePositions = NormalizePointables.get();


        scope.getZSize = function (normalVector, scale, min) {
          var size = 0;
          if (normalVector > 0) {
            size = normalVector * scale;
          }
          return size + min;
        };


      },
      templateUrl: 'src/view/leapOverlay.tpl.html'
    };
  });