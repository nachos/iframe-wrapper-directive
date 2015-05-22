'use strict';

angular.module('iframeWrapper', ['ngLodash'])
  .directive('iframeWrapper', function(lodash, $compile) {
    return {
      restrict: 'E',
      replace: true,
      scope:{
        src: "=",
        content: '='
      },
      template:'<iframe seamless nwdisable nwfaketop></iframe>',
      link: function(scope, ele, attr, ctrl) {
        ele.attr('src', scope.src);
        ele[0].contentWindow = lodash.assign(ele[0].contentWindow, scope.content);
      }
    };
  });