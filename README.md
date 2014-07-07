# google

最开始打算模仿谷歌各种功能主页,现在保存各种练习小代码段，demo  

由于部分node需要的模块嵌套层次太多，导致文件名过长。.gitignore文件中忽略了所有node_modules文件夹，运行特定项目时需要npm install安装模块

## js小功能模块

- [module/js/cookieUtil.js](module/js/cookieUtil.js):cookie操作的工具

- [module/js/EventUtil.js](module/js/EventUtil.js):跨浏览器的DOM事件操作工具

- [module/js/getDescendants.js](module/js/getDescendants.js):给定一个DOM节点node和正整数n返回node的所有第n代后代节点（直接子节点为第1代）

- [module/js/getScrollOffset.js](module/js/getScrollOffset.js):获取指定窗口的滚动条偏移量，如未指定则返回当前窗口滚动条偏移量

- [module/js/isArray.js](module/js/isArray.js)：判断对象是否为数组

- [module/js/isFunction](module/js/isFunction.js):判断对象是否为函数，typeof符合规范时优先使用，否则使用toString

- [module/js/parseQuery.js](module/js/parseQuery.js):解析url中的query string为对象

- [module/js/parseUrl.js](module/js/parseUrl.js):解析url为window.location

- [module/js/richText.js](module/js/richText.js):给字符串中只包含一个img元素的p标签增加一个叫pic的class
- [module/js/serializeForm.js](module/js/serializeForm.js):序列化form为可提交的字符串


## Demo，模块部分
- [requirejs-demo/simple-demo](requirejs-demo/simple-demo):requirejs 简单demo

- [module/tabify.html](module/tabify.html):tab选显卡demo

- [module/clock](module/clock):基于css3 transform的时钟

- [grunt-demo/jshint](grunt-demo/jshint):grunt jshint demo

- [grunt-demo/qunit](grunt-demo/qunit):grunt qunit demo

- [module/page-scroll](module/page-scroll):一个简单的返回顶部组件的功能

- [module/modal-window.html](module/modal-window.html)：html5，css3弹出模式对话框


- [module/tips/tips.html](module/tips/tips.html):提示框控件


- [module/drop-down-menu.html](module/drop-down-menu.html):下拉菜单


- [module/check-items.html](module/check-items.html): checkbox选择


