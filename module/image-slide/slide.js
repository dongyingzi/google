var Slide = (function (window, undefined) {

    function extend(target, source) {
        for (var key in source) {
            target[key] = source[key];
        }
    }

    function addClass(elem, cls) {
        if (elem.className) {
            elem.className = elem.className + ' ' + cls;
        } else {
            elem.className = cls;
        }
    }

    function hasClass(elem, cls) {
        return elem.className.indexOf(cls) !== -1;
    }

    function removeClass(elem, cls) {
        var className = ' ' + elem.className + ' ';
        var reg = new RegExp(' ' + cls + ' ');
        elem.className = className.replace(reg, ' ');
    }

    var EventUtil = {
        on: function (elem, type, listener) {
            if (elem.addEventListener) {
                elem.addEventListener(type, listener, false);
                return listener;
            } else if (elem.attachEvent) {
                var wrapper = function (event) {
                    listener.call(elem, event);
                };
                elem.attachEvent('on' + type, wrapper);
                return wrapper;
            }
        }
    };

    /**
     * 图片轮播控件,支持IE8及以上
     * 
     * @constructor
     * @param {Object} opt 初始化参数
     * @param {HTMLElement} opt.slide 轮播图片容器
     * @param {Function} opt.onSlide 图片切换时调用的函数，接收参数为切换后的图片索引[0,len)
     */
    function Slide(opt) {
        if (!opt.slide) {
            throw new Error('opt.slide没有设置');
        }

        extend(this, opt);
        var self = this;
        this.current = 0;
        this.onSlide = function (index) {
            console.log(index);
        };

        var items = this.slide.querySelectorAll('.' + Slide.clsSlideItem);
        this.items = Array.prototype.slice.call(items, 0);
        this.length = items.length;

        var i, len, nav;
        var frag = document.createDocumentFragment();
        for (i = this.length - 1; i >= 0; --i) {
            nav = document.createElement('a');
            nav.href = "#";
            nav.className = Slide.clsSlideNav;
            nav.setAttribute('index', i);
            frag.appendChild(nav);
        }
        this.slide.appendChild(frag);

        EventUtil.on(this.slide, 'click', function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement;

            if (hasClass(target, Slide.clsSlidePrev)) {
                self.activeItem(self.current - 1);
            } else if (hasClass(target, Slide.clsSlideNext)) {
                self.activeItem(self.current + 1);
            }
        });


    };

    Slide.prototype.activeItem = function (index) {
        if (index < 0) {
            index = this.length - 1;
        } else if (index == this.length) {
            index = 0;
        }

        addClass(this.items[index], Slide.clsSlideItemActive);
        removeClass(this.items[this.current], Slide.clsSlideItemActive);

        this.current = index;
        if (this.onSlide) {
            this.onSlide.call(this, index);
        }
    };

    Slide.clsSlideItemActive = 'slide-item-active';
    Slide.clsSlideItem = 'slide-item';
    Slide.clsSlidePrev = 'slide-prev';
    Slide.clsSlideNext = 'slide-next';
    Slide.clsSlideNav = 'slide-nav';


    return Slide;
}(window));