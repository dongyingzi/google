/*
*  第一部分定义dome，Dome声明
*  第二部分定义对ecma及w3c的支持
*  第三部分定义dome扩展
*  第四部分定义Dome类包含属性及方法
*  作者：qiudeqing
*/
/**
* @module dome
**/
(function (window, undefined) {

  /*
  * 第一部分：定义dome，Dome声明
  **/
  var dome = {};
  
  var _undefinedstr = typeof undefined,
    rclass = /[\t\r\n]/g;
  

  /**
  * 包含指定dom元素的包装类
  * @class Dome
  * @constructor
  **/
  function Dome(elements) {
    var i,
      len;
    for (i = 0, len = elements.length; i < len; ++i) {
      this[i] = elements[i];
    } // end for
    this.length = len;
  } // end Dome()
  
  Dome.fn = Dome.prototype = {
    constructor: Dome
  }; // end Dome.prototype
  
  /*
  * 第二部分：处理浏览器对ECMAScript及w3c的支持
  **/
  /**
  * 检查Array.prototype.forEach()，提供兼容版本
  * JavaScript1.6, ECMAScript 5th
  * @method Array.prototype.forEach
  * @param fn {function} 对数组每一个元素调用的函数fn(d,i,array)
  * @param scope {Object} fn调用的this
  * @chainable
  **/
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, scope) {
      "use strict";
      var i, len;
      for (i = 0, len = this.length; i < len; ++i) {
        if (i in this) {
          fn.call(scope, this[i], i, this);
        } // end if
      } // end for
    }; // end forEach()
    return this;
  } // end if: forEach
  
  /**
  * 检查Array.prototype.map(callback, [,thisArg])，提供兼容版本
  * JavaScript1.6 ECMAScript 5th
  * @method Array.prototype.map
  * @param callback {Function} 针对每一个非空元素调用，使用返回值构造新数组，原数组元素为空
  *                            对应生成的位置为空
  * @param thisArg {Object} callback调用上下文
  * @return {Array} 返回callback返回元素组成的数组
  **/
  if (!Array.prototype.map) {
    Array.prototype.map = function (callback, thisArg) {
      var results,
        item,
        i,
        len;
      
      len = this.length;
      results = new Array(len);
      for (i = 0; i < len; ++i) {
        if (i in this) {
          results[k] = callback.call(thisArg, this[i], i, this);
        } // end if
      } // end for
      return results;
    }; // end map()
  } // end if
  
  /*
  * 第三部分：对dome全局对象扩展
  **/
  /**
  * 以多各类扩展第一个类，如果只含一个参数，则扩展调用者，不支持深扩展
  * @method dome.extend
  * @param target {Object} 需要被扩展的对象，如果只传入一个参数，使用target扩展dome
  * @param obj1...objN {Object} 一个到多个对象，用于对target进行扩展
  * @return target {Object} 返回被扩展的对象
  **/
  dome.extend  = function () {
    var target = arguments[0] || {},
      options,
      name,
      i = 1,
      length = arguments.length;
    
    if (typeof target !== "object") {
      target = {};
    } // end if
    if (length === i) {
      target = this;
      --i;
    } // end if
    
    for ( ; i < length; ++i) {
      // only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
      
        for (name in options) {
          target[name] = options[name];
        } // end for-in: loop all properties
        
      } // end if
    } // end for: loop all objects
    
    return target;
  }; // end extend()
  
  /**
  * 返回包含所有目标元素的Dome对象
  * @method dome.selectAll
  * @param selector {string} css选择器选择元素
  * @param selector {Array Like Object} 元素集合
  * @param selector {Element} 单个元素
  * @return 包含目标元素的Dome对象
  **/
  dome.selectAll = function (selector) {
    var elements;
    
    if (typeof selector === "string") {
      elements = document.querySelectorAll(selector);
    } // end if
    else if (dome.isArrayLike(selector)) {
      elements = selector;
    } // end else if
    else {
      elements = [selector];
    } // end else
    
    return new Dome(elements);
  } // end selectAll()
  /**
  * 返回包含第一个目标元素的Dome对象
  * @method dome.select
  * @param selector {string} css选择器选择元素
  * @param selector {Array Like Object} 元素集合
  * @param selector {Element} 单个元素
  * @return 包含目标元素的Dome对象
  **/
  dome.select = function (selector) {
    var element;
    if (typeof selector === "string") {
      element = document.querySelector(selector);
    } // end if
    else if (dome.isArray(selector)) {
      element = selector[0];
    } // end else if
    else {
      element = selector;
    } // end else
    if (element == null) {
      return new Dome([]);
    } // end if
    else {
      return new Dome([element]);
    } // end else
  }; // end dome.select()
  /**
  * @method dome.isFunction
  * @param obj {Any} 需要判断是否为函数的对象
  * @return {boolean} ture：是函数，false：不是函数
  **/
  dome.isFunction = function (obj) {
    return (typeof obj) === "function";
  }; // end isFunction()
  
  /**
  * @method dome.isArray
  * @param obj {Object} 需要检查是否为数组的对象
  * @return {boolean} true：是数组；false：不是数组
  **/
  dome.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  }; // end isArray()
  
  /**
  * 判断传入参数是否为类数组：如果对象包含合法length属性，则认为其是类数组对象
  * @method dome.isArrayLike
  * @param o {Object} 需要检查的对象
  * @return {boolean} true：传入对象是类数组对象；false：传入对象不是类数组对象
  **/
  dome.isArrayLike = function (o) {
    if (o &&
        typeof o === "object" &&
        isFinite(o.length) &&
        o.length >= 0 &&
        o.length === Math.floor(o.length) &&
        o.length < 4294967296) { // length < 2^32
        return true;
    } else {
      return false;
    } // end else
  }; // end isArrayLike()
  
  /**
  * 以数组array元素依次调用操作函数fn,scope为fn调用上下文
  * @method dome.forEach
  * @param array {Array} 需要处理的数组
  * @param fn {Function} 对数组元素调用的操作
  * @param scope {Object} fn调用上下文
  * @chainable
  **/
  dome.forEach = function (array, fn, scope) {
    if (!dome.isArrayLike(array)) {
      throw TypeError( array + " is not array like");
    } // end if
    return Array.prototype.forEach.call(array, fn, scope);
  }; // end forEach()
  
  /**
  * 返回对目标数组元素调用fn得到的返回值组成的数组
  * @method dome.map
  * @param array {Array} 需要映射的数组
  * @param fn {function} 对数组元素进行映射的函数
  * @param scope {Object} fn调用时的上下文
  * @return {Array} 映射后生成的数组
  **/
  dome.map = function (array, fn, scope) {
    if (!dome.isArrayLike(array)) {
      throw TypeError( array + " is not array like");
    } // end if  
    return Array.prototype.map.call(array, fn, scope);
  }; // end map()
  
  /**
  * 创建dom元素，返回新创建元素的Dome类封装
  * @method dome.create
  * @param tagName {String} 需要创建的元素标签名（不含<>）
  * @return {Dome} 返回新创建元素的Dome类封装
  **/
  dome.create = function (tagName) {
    var e = document.createElement(tagName);
    return new Dome([e]);
  }; // end create()
  /**
  * 判断传入的dom节点是否包含检测的class
  * @method dome.hasClass
  * @param element {Element} 需要检测的dom节点
  * @param cls {string} 需要检测的类
  **/
  dome.hasClass = function (element, cls) {
    var className = " " + cls + " ";
    if (element.nodeType === 1 
      && (" " + element.className + " ").replace(rclass, " ").indexOf(className) >= 0) {
      return true;
    } // end if
    return false;
  }; // end hasClass()
  /**
  * 给dom节点添加目标类，每次只能传入单个类
  * @method dome.addClass
  * @param element {Element} 需要添加class的节点
  * @param cls {string} 需要添加的class
  **/
  dome.addClass = function (element, cls) {
    if (element.nodeType === 1) {
      element.className = element.className + " " + cls;
    } // end if
  }; // end addClass()
  /**
  * 给dom节点删除目标类，每次只能传入单个类
  * @method dome.removeClass
  * @param element {Element} 需要删除class 的节点
  * @param cls {string} 需要删除的class
  **/
  dome.removeClass = function (element, cls) {
    var className = " " + element.className + " ";
    if (element.nodeType === 1) {
      className = className.replace(new RegExp(" " + cls + " ", "g"), " ");
      element.className = dome.trim(className);    
    } // end if
  }; // end removeClass()
  /**
  * 给dom节点toggle目标类，每次只能传入一个类
  * @method dome.toggleClass
  * @param element {Element} 需要toggle class的节点
  * @param cls {string} 需要toggle的class
  **/
  dome.toggleClass = function (element, cls) {
    if (dome.hasClass(element, cls)) {
      dome.removeClass(element, cls);
    } // end if
    else {
      dome.addClass(element, cls);
    } // end else
  }; // end toggleClass()
  /**
  * 去掉字符串前后多余的空白符
  * @method dome.trim
  * @param str {string} 需要去掉前后空白符的字符串
  * @return {string} 去掉空白符后的字符串
  **/
  dome.trim = function (str) {
    return str.replace(/^\s+|\s+$/gm, "");
  }; // end trim()

  
  /*
  * 第四部分：定义Dome方法及属性
  **/
  Dome.fn.extend = dome.extend;
  /**
  * @method Dome.fn.map
  * @param callback {Function} 以元素为输入，返回对象用于创建新数组
  * @param scope {Object} callback调用上下文
  * @return {Array} callback返回对象组成的数组
  **/
  Dome.fn.map = function (callback, scope) {
    return Array.prototype.map.call(this, callback, scope);
  }; // end map()
  /**
  * @method Dome.fn.forEach
  * @param callback {Function} 以每一个元素作为参数的函数
  * @param scope {Object} callback调用上下文
  * @return {Dome} 调用forEach的Dome对象
  * @chainable
  **/
  Dome.fn.forEach = function (callback, scope) {
    this.map(callback, scope);
    return this;
  }; // end froEach()
  /**
  * 设置Dome内所有元素textContent为参数字符串，如果没有传入参数。返回第一个元素的textContent
  * @method Dome.fn.text
  * @param newText {String} 需要为所有元素设置的新文本，如果不传入参数，返回第一个元素的文本
  * @return {String} 不传入参数调用，返回第一个元素的文本
  **/
  Dome.fn.text = function (newText) {
    if (typeof newText !== _undefinedstr) {
      return this.forEach(function (e) {
        e.textContent = newText;
      });
    } // end if
    else {
      return this[0].textContent;
    } // end else
  }; // end text()
  /**
  * 添加事件监听器
  * @method Dome.fn.addEventListener
  * @param type {String} 事件类型
  * @param fn {Function} 事件监听器function (event)，context为事件触发对象
  * @param capture {boolean} 是否capture
  * @chainable
  **/
  Dome.fn.addEventListener = (function () {
    if (typeof window.addEventListener !== _undefinedstr) {
      return function (type, fn, capture) {
        return this.forEach(function (d, i) {
          d.addEventListener(type, fn, capture);
        });
      };
    } // end if
    else {
      return function (type, fn) {
        return this.forEach(function (d, i) {
          d[type] = fn;
          d["e" + type] = function (evnet) { d[type](event); };
          d.attachEvent("on" + type, function (event) {
            event = event || window.event;
            if (typeof event.target === _undefinedstr) {
              event.target = event.srcElement;
            } // end if
            d["e" + type](event);
          });
        });
      };
    } // end else
  }()); // end addEventListener()
  /**
  * 如果元素没有对应class，添加，只支持单个类
  * @method Dome.fn.addClass
  * @param newClass {String} 需要添加的类
  * @chainable
  **/
  Dome.fn.addClass = function (newClass) {
    return this.forEach(function (d) {
      dome.addClass(d, newClass);
    });
  }; // end addClass()
  /**
  * 如果元素有目标class，删除，只支持单个类
  * @method Dome.fn.removeClass 
  * @param oldClass {String} 需要删除的class
  * @chainalbe
  **/
  Dome.fn.removeClass = function (oldClass) {
    return this.forEach(function (d) {
      dome.removeClass(d, oldClass);
    });
  }; // end removeClass()
  /**
  * 如果元素没有目标class，添加，如果有，删除，只支持单个类
  * @method Dome.fn.toggleClass
  * @param targetClass {String} 需要toggle的类名
  * @chainable
  **/
  Dome.fn.toggleClass = function (targetClass) {
    return this.forEach(function (d) {
      dome.toggleClass(d, targetClass);
    });
  }; // end toggleClass()
  /**
  * 在Dome元素的子元素中选择所有满足要求的节点
  * @method Dome.fn.selectAll
  * @param selector {string} selector
  * @return {Dome} 返回满足要求的节点
  **/
  Dome.fn.selectAll = function (selector) {
    var elements = [],
      e,
      slice = Array.prototype.slice;
    if (typeof selector === "string") {
      this.forEach(function (d) {
        e = d.querySelectorAll(selector);
        if (e !== null) {
          elements = elements.concat(slice.call(e));
        } // end if
      });
      return new Dome(elements);
    } // end if
  }; // end selectAll()
  /**
  * 在Dome元素子元素中选择第一个满足要求的节点
  * @method Dome.fn.select
  * @param selector {string} selector
  * @return {Dome} 返回满足要求的节点
  **/
  Dome.fn.select = function (selector) {
    var elements = [],
      e;
    if (typeof selector === "string") {
      this.forEach(function (d) {
        e = d.querySelector(selector);
        if (e !== null) {
          elements.push(e);
        } // end if
      });
      return new Dome(elements);
    } // end if
  }; // end select()
  /**
  * 为Dome元素设置对应属性
  * @method Dome.fn.setAttribute
  * @param name {string} 属性名
  * @param value {string} 属性值
  * @chainable
  **/
  Dome.fn.setAttribute = function (name, value) {
    var i,
      len;
    for (i = 0, len = this.length; i < len; ++i) {
      this[i].setAttribute(name, value);
    } // end for
    return this;
  }; // end setAttribute()
  /**
  * 为Dome元素移除对应属性
  * @method Dome.fn.removeAttribute
  * @param name {string} 需要移除的属性名
  * @param chainable
  **/
  Dome.fn.removeAttribute = function (name) {
    var i,
      len;
    for (i = 0, len = this.length; i < len; ++i) {
      this[i].removeAttribute(name);
    } // end for
    return this;
  }; // end removeAttribute()
  /**
  * 测试Dome元素中是否含有对应属性
  * @method Dome.fn.hasAttribute
  * @param name {string} 需要检测的属性名
  * @return {boolean} 如果有任一元素包含此属性返回true，否则false
  **/
  Dome.fn.hasAttribute = function (name) {
    var i,
      len,
      isExist = false;
    for (i = 0, len = this.length; i < len; ++i) {
      if (this[i].hasAttribute(name)) {
        isExist = true;
        break;
      } // end if
    } // end for
    return isExist;
  }; // end hasAttribute()
  /**
  * 返回Dome元素中第一个元素对应属性值
  * @method Dome.fn.getAttribute
  * @param name {string} 需要获取的属性名
  * @return {string} 属性值
  **/
  Dome.fn.getAttribute = function (name) {
    return this[0].getAttribute(name);
  }; // end getAttribute()
  
  window.dome = dome;
})(window);













