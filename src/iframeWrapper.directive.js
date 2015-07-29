'use strict';

angular.module('iframeWrapper', ['ngLodash'])
  .directive('iframeWrapper', function (lodash) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        src: '=',
        content: '='
      },
      template: '<iframe seamless nwdisable nwfaketop></iframe>',
      link: function (scope, ele) {
        ele.attr('src', scope.src);
        lodash.assign(ele[0].contentWindow, scope.content);
      }
    };
  });