# grunt-jshint demo

[jshint-strict-options.js](jshint-strict-options.js)为一个推荐的jshint配置信息，在Gruntfile.js中直接导入配置即可

<pre>
// Gruntfile.js中如下配置即可使用
var jshintOptions = require('./jshint-strict-options');
module.exports = function (grunt){
    grunt.initConfig({
        jshint: {
            options: jshintOptions,
            all: {
                src: ['index.js', 'src/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint:all']);
};
</pre>

