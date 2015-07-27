'use strict';

var Server = require('karma').Server;
var path = require('path');

module.exports = function (gulp) {
  gulp.task('test', ['wiredep:karma', 'lint'], function () {
    new Server({
      configFile: path.resolve('karma.conf.js'),
      singleRun: true
    }).start();
  });
};
