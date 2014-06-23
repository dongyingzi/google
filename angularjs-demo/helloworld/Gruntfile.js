
var jshintOptions = require('./jshint-strict-options');

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: jshintOptions,
            src: ['**.js', '!js/angular.min.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);

};