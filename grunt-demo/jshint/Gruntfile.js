module.exports = function (grunt){
    grunt.initConfig({
        jshint: {
            options: {
                eqeqeq: true, // 比较相等时强制使用===
                curly: true // if while for等后面必须有大括号，包裹所有对应代码
            },
            // 配置target：检查所有文件
            all: {
                src: ['index.js', 'src/*.js']
            },
            // target： 只检查index.js
            index: {
                src: 'index.js'
            },
            // target： 只检查src下的js文件
            srcLint: {
                src: 'src/*.js'
            }
        }
    });

    // 所有任务都必须加装对应插件才能运行
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // 定义一系列任务组成的复合任务，减轻工作负担
    grunt.registerTask('default', ['jshint:all']);
};