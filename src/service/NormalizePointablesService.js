'use strict';

angular.module('angularLeapUi')
  .factory('NormalizePointables', function ($interval, leap) {


    var normalizedPointables = [];

    var updateFn = function () {
      var frame = leap.getLastFrame();
      var interactionBox = frame.interactionBox;

      normalizedPointables.length = 0;
      angular.forEach(frame.pointables, function (pointable) {
        normalizedPointables.push(interactionBox.normalizePoint(pointable.tipPosition, true));
      });

      return normalizedPointables;
    };

    $interval(updateFn, 50);

    return{
      get: function () {
        return normalizedPointables;
      }
    };
  });