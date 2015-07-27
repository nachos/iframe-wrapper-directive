'use strict';

var wiredep = require('wiredep').stream;

module.exports = function (gulp) {
  gulp.task('wiredep:karma', function () {
    gulp.src('karma.conf.js')
      .pipe(wiredep({
        devDependencies: true,
        fileTypes: {
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi,
              css: /'(.*\.css)'/gi
            },
            replace: {
              js: '\'{{filePath}}\',',
              css: '\'{{filePath}}\','
            }
          }
        }
      }))
      .pipe(gulp.dest('./'));
  });
};
