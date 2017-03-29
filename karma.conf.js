// Karma configuration
// Generated on Wed Mar 29 2017 12:11:01 GMT+0200 (CEST)

module.exports = function (config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'bower_components/angular/angular.min.js',
      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/app.js',
      'app/config.js',
      'app/services/gnomeFactory.js',
      'app/services/gnomeFactory.Spec.js'
    ],

    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // feel free to change browser to adjust to your browser
    browsers: ['Chromium'],
    singleRun: false,
    concurrency: Infinity
  })
}
