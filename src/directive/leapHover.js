'use strict';

angular.module('angularLeapUi')
  .directive('leapHover', function ($interval, NormalizePointables) {
    return {
      restrict: 'EACM',
      require: '^leapOverlay',
      link: function (scope, element, attrs, controller) {
        var dataArray = NormalizePointables.get();
        var className = 'leap-hover';


        $interval(function () {
          angular.forEach(dataArray, function (pointable) {
            var cursor = {
              x: pointable[0] * controller.offsetWidth,
              y: controller.offsetHeight - pointable[1] * controller.offsetHeight
            };

            var box = element[0].getBoundingClientRect();
            if (cursor.x > box.left && cursor.x < box.right && cursor.y > box.top && cursor.y < box.bottom) {
              angular.element(element).addClass(className);
            }
            else {
              angular.element(element).removeClass(className);
            }


          });
        }, 50);


      }
    };
  });