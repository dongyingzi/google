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
            src: ['module/js/*.js', 'module/test/*.js', '!module/js/jquery.js']
        },
        qunit: {
            src: ['module/test/*.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('default', ['jshint', 'qunit']);
};