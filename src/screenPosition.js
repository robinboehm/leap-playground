'use strict';

angular.module('angularLeapUi')
  .factory('screenPosition', function ($interval, leap) {

    var currentPosition = {};


    $interval(50, function () {
      var frame = leap.getLastFrame();

      var interactionBox = frame.interactionBox;

      currentPosition.x = frame.pointable.tipPosition[0] / ((  +(frame.pointable.tipPosition[0] - interactionBox.center[0])) );
    });

    return {
      getCurrentPosition: function () {
        return currentPosition;
      }
    };
  });