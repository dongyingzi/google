

/**
 * 在元素末尾添加按钮，点击按钮会在元素末尾随机
 * 添加文字
 * 
 * @param {String} 可变长参数，字符串为元素id
 */
function addText() {
    var i, len;

    var words = ['aaa', 'bbb', 'ccc', 'ddd'];

    function add(e) {
        var n = Math.random() * 20;
        var i;
        var out = [];

        for (i = 0; i <= n; i++) {
            out.push(words[i % 4]);
        }

        var p = document.createElement('p');
        if (typeof p.textContent !== 'undefined') {
            p.textContent = out.join(' ');
        } else if (typeof p.innerText !== 'undefined') {
            p.innerText = out.join(' ');
        }

        e.parentNode.insertBefore(p, e);
    };

    var btn,
        item;
    for (i = 0, len = arguments.length; i < len; ++i) {
     
        btn = document.createElement('a');
        if (typeof btn.textContent !== 'undefined') {
            btn.textContent = 'add text';
        } else if (typeof btn.innerText !== 'undefined') {
            btn.innerText = 'add text';
        }
        btn.href = '#';
        btn.onclick = function () {
            add(this);
            return false;
        };

        item = document.getElementById(arguments[i]);
        item.appendChild(btn);
    }

}