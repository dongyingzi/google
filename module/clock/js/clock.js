jQuery(function ($) {
    var $sec = $('.sec');
    var $min = $('.min');
    var $hour = $('.hour');

    setInterval(function () {
        var time = new Date();

        var seconds = time.getSeconds();
        var sdegree = seconds * 6;
        var srotate = 'rotate(' + sdegree + 'deg)';

        var minutes = time.getMinutes();
        var mdegree = minutes * 6;
        var mrotate = 'rotate(' + mdegree + 'deg)';

        var hours = time.getHours();
        var hdegree = hours * 30 + (minutes / 2);
        var hrotate = 'rotate(' + hdegree + 'deg)';

        $sec.css({
            'transform': srotate
        });

        $min.css({
            'transform': mrotate
        });

        $hour.css({
            'transform': hrotate
        });


    }, 1000);
}(jQuery));