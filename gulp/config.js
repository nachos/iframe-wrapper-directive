'use strict';

module.exports = {
  paths: {
    src: './src/**/*.js',
    test: './test/**/*.spec.js',
    gulp: ['./gulpfile.js', './gulp/**/*.js'],
    coverage: 'coverage/**/lcov.info'
  },
  manifests: ['./package.json', './bower.json']
};