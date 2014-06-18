module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                curly: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            uses_defaults: {
                files: ['module/js/*.js'],
                ignore: ['module/js/jquery.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};