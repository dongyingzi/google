
function PageScroll() {
    this.pause = false;   // 节流，防止滚动事件触发太频繁
    this.interval = PageScroll.options.interval;

    var container = document.createElement('ul');
    container.className = 'scroll-container';
    container.innerHTML = PageScroll.options.html;

    this.container = container;
    document.body.appendChild(container);

    this.toTop = container.querySelector('.' + PageScroll.options.clsToTop);

    this.init();

}

PageScroll.prototype.init = function () {
    var self = this;
    this.adjustController();

    window.addEventListener('scroll', function () {
        if (!self.pause) {
            setTimeout(function () {
                self.adjustController();
                self.pause = false;
            }, self.interval);
            self.pause = true;
        }
    }, false);

    this.container.addEventListener('click', function (event) {
        var target = event.target;

        if (target.classList.contains(PageScroll.options.clsToTop)) {
            window.scrollTo(0, 0);
        }
    }, false);
};

PageScroll.prototype.adjustController = function () {
    var y = PageScroll.getScrollOffset().y;

    if (y < 200) {
        this.hideToTop();
    } else {
        this.showToTop();
    }

    if (this.toTopHidden) {
        if (!this.hidden) {
            this.hideContainer();
        }
    } else {
        if (this.hidden) {
            this.showContainer();
        }
    }

};
PageScroll.prototype.hideContainer = function () {
    this.container.classList.add(PageScroll.options.clsScrollHidden);
    this.hidden = true;
};
PageScroll.prototype.showContainer = function () {
    this.container.classList.remove(PageScroll.options.clsScrollHidden);
    this.hidden = false;
};
PageScroll.getScrollOffset = function () {
    var w = window;
    if (w.pageXOffset != null) {
        return {
            x: w.pageXOffset,
            y: w.pageYOffset
        };
    }

    var d = document;
    if (d.compatMode === 'CSS1Compat') {
        return {
            x: d.documentElement.scrollLeft,
            y: d.documentElement.scrollTop
        };
    }
    return {
        x: d.body.scrollLeft,
        y: d.body.scrollTop
    };
};
PageScroll.prototype.hideToTop = function () {
    this.toTop.classList.add(PageScroll.options.clsScrollHidden);
    this.toTopHidden = true;
};
PageScroll.prototype.showToTop = function () {
    this.toTop.classList.remove(PageScroll.options.clsScrollHidden);
    this.toTopHidden = false;
};

PageScroll.options = {
    html: '<li class="scroll-top">返回顶部</li>',
    interval: 100,  // 节流时间
    clsToTop: 'scroll-top',
    clsScrollHidden: 'scroll-hidden'
};