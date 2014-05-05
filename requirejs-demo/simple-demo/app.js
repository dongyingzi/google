require.config({
    paths: {
        'underscore': 'lib/underscore',
        'jquery': 'lib/jquery'
    }
});

require(['lib/modules/template'], function (template) {
    template.showName('邱德清');
});