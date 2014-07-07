/**
 * 信息提示框控件，单例模式
 * 
 */
var Tip = (function (window, undefined) {

    function extend(target, source) {
        for (var key in source) {
            target[key] = source[key];
        }
    }

    function text(elem, text) {
        if ('textContent' in elem) {
            elem.textContent = text;
        } else if ('innerText' in elem) {
            elem.innerText = text;
        } else {
            elem.innerHTML = text;
        }
    }

    function hasClass(elem, cls) {
        var className = ' ' + elem.className + ' ';
        var regexp = new RegExp(' ' + cls + ' ');

        return regexp.test(className);
    }

    var Tip = {
        clsTip: 'tip',
        clsTipInfo: 'tip-info',
        clsTipAck: 'tip-ack',
        clsTipClose: 'tip-close',

        cookieKey: 'tipStatus',

        dom: {},

        status: '',
        HIDE: 'hide',
        SHOW: 'show',

        infoText: '好消息',
        ackText: '我知道了',

        /**
         * 初始化控件
         * 
         * @param {Object} opt 参数
         * @param {HTMLElement} opt.container 生成提示框的容器
         * @param {string} opt.infoText 提示框内容
         * @param {string} opt.ackText 我知道了显示文本
         * @return {Tip} 支持链式调用
         */
        init: function (opt) {
            if (!opt.container) {
                throw new Error('Tip 需要提供容器');
            }

            extend(this, opt);

            var tip = document.createElement('div');
            tip.className = this.clsTip;

            this.container = opt.container;
            this.dom.tip = tip;

            var info = document.createElement('p');
            info.className = this.clsTipInfo;
            text(info, this.infoText);
            this.dom.info = info;
            tip.appendChild(info);

            var ack = document.createElement('a');
            ack.href = '#';
            ack.className = this.clsTipAck;
            text(ack, this.ackText);
            this.dom.ack = ack;
            tip.appendChild(ack);

            var close = document.createElement('a');
            close.href = '#';
            close.className = this.clsTipClose;
            text(close, 'x');
            this.dom.close = close;
            tip.appendChild(close);

            tip.addEventListener('click', function (event) {
                event.preventDefault();
                var target = event.target;

                if (hasClass(target, Tip.clsTipClose)) {
                    Tip.close();
                } else if (hasClass(target, Tip.clsTipAck)) {
                    Tip.ack();
                }

            }, false);

            this.loadStatus();



            this.container.appendChild(tip);
        },

        loadStatus: function () {
            var pairs = document.cookie.split('; ');
            var i, len, item, pair;

            for (i = 0, len = pairs.length; i < len; ++i) {
                item = pairs[i].split('=');
                if (item[0] === this.cookieKey) {
                    break;
                }
            }

            if (item[0] !== this.cookieKey) {
                this.status = this.HIDE;
                this.show();
            }

        },

        setContainer: function (container) {
            container.appendChild(this.dom.tip);
            this.dom.container = container;
        },

        close: function () {
            var deadLine = new Date();
            var now = deadLine.valueOf();

            deadLine.setDate(deadLine.getDate() + 1);
            deadLine.setHours(0);
            deadLine.setMinutes(0);
            deadLine.setSeconds(0);
            deadLine.setMilliseconds(0);

            var maxAge = Math.ceil((deadLine.valueOf() - now) / 1000);

            this.hide(maxAge);
        },

        ack: function () {
            this.hide(60 * 60 * 24 * 365 * 10);
        },


        hide: function (maxAge) {
            this.dom.tip.style.display = 'none';
            document.cookie = this.cookieKey + '=show; max-age=' + maxAge;
        },

        show: function () {
            this.dom.tip.style.display = 'block';
        },

        setInfo: function (info) {
            text(this.dom.info, info);
            this.infoText = info;
        },

        setAck: function (ack) {
            text(this.dom.ack, ack);
            this.ackText = ack;
        }

    };

    return Tip;
}(window));