define(['underscore', 'jquery'], function (_, $) {
    var showName = function (n) {
        var temp = _.template('Hello <%= name %>');
        $('body').html(temp({name: n}));
    }; // end showName()
    
    return {
        showName: showName
    };
});