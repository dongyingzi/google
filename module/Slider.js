/**
 * @file main.js
 * @author qiudeqing
 * @date 
 * @description
 * jquery插件，图片轮播
 */

define(['jquery'], function ($) {


    /**
     * 将容器内图片进行轮播
     * 
     * @constructor
     * @param {[type]} selector [selector description]
     * @param {[type]} options [options description]
     */
    function Slider(selector) {
        this.slider = $(selector); // 图片容器
        this.items = this.slider.find('.slider-item'); // 图片

        this.current = 0;  // 当前显示的图片的索引[0, length)
        this.length = this.items.length; // 图片总数

        this.init();
    }

    Slider.prototype = {
        next: function () {
        },

        init: function () {
            var self = this;

            
            var index = [];
            index.push('<div class="slider-index" data-click="{"act": "b_topic_slide"}">');
            for (var i = 0, len = this.length; i < len; ++i) {
                index.push('<span data-index="' + i + '" class="slider-index-item"></span>');
            }
            index.push('</div>');

            this.slider.append($(index.join('')));

            this.index = this.slider.find('.slider-index-item');

            this.activeItem(this.current);

            this.index.on('click', function (e) {
                var $target = $(e.target);
                var i = $target.data('index');


                self.stopSlide();
                self.activeItem(i);
                self.autoSlide();
            });

            this.autoSlide();

        },

        activeItem: function (index) {
            if (index >= this.length) {
                index = this.length - 1;
            }
            else if (index < 0) {
                index = 0;
            }

            this.current = index;

            this.items.removeClass('slider-item-active');
            $(this.items[index]).addClass('slider-item-active');

            this.index.removeClass('slider-index-item-active');
            $(this.index[index]).addClass('slider-index-item-active');
        },

        autoSlide: function () {
            var self = this;

            if (this.timer) {
                return;
            }

            this.timer = setInterval(function () {
                self.animate();
            }, Slider.defaults.interval);

        },

        stopSlide: function () {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        },

        animate: function () {

            var i = this.current;

            i += 1;
            if (i >= this.length) {
                i = 0;
            }

            this.current = i;

            this.activeItem(i);
        }
    };

    Slider.defaults = {
        interval: 4000
    };


    return Slider;
});