'use strict';

angular.module('iframeWrapper', ['ngLodash'])
  .directive('iframeWrapper', function(lodash) {
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
        var content = ele[0].contentWindow;
        content = lodash.assign(content, scope.content);
      }
    };
  });