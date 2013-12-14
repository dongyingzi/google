/**
* account 模块
* @class Account
* @constructor
**/
function Account(account) {
  var that = this;
  this.account = dome.select(account);
  this.itemts = this.account.selectAll(".account__item");
  this.links = this.account.selectAll(".account__link");
  this.itemToggle = this.account.selectAll(".account__item-toggle");
  this.itemToggle.addEventListener("click", function (event) {
    Account.toggleItemClassFromChild(event.target, "account__item--active");
  }, false);
  dome.select(document).addEventListener("click", function (event) {
    var p = event.target;
    while (p !== null && p.nodeType === 1 
      && !dome.hasClass(p, "account__item-toggle")) {
      p = p.parentNode;
    } // while
    if (p === null || p.nodeType !== 1) {
      that.itemToggle.forEach(function (d) {
        Account.removeItemClassFromChild(d, "account__item--active");
      });
    } // end if
  }, false);
} // end Account()

/**
* 为元素父.account__item切换cls
* @method toggleItemClassFromChild
* @param element {Element} 需要为父.account__item切换cls的对象
* @param cls {string} 需要切换的class
**/
Account.toggleItemClassFromChild = function (element, cls) {
  var p = element;
  while (p !== null & p.nodeType === 1 && !dome.hasClass(p, "account__item")) {
    p = p.parentNode;
  } // end while
  if (p !== null) {
    dome.toggleClass(p, cls);
  } // end if
} // end toggleItemClassFromChild()
/**
* 为父元素.account__item移除cls
* @method removeItemClassFromChild
* @param element {Element} 需要为父.account__item移除cls的对象
* @param cls {string} 需要移除的class
**/
Account.removeItemClassFromChild =  function (element, cls) {
  var p = element;
  while (p !== null && p.nodeType === 1 && !dome.hasClass(p, "account__item")) {
    p = p.parentNode;
  } // end while
  if (p !== null && p.nodeType === 1 && dome.hasClass(p, "account__item")) {
    dome.removeClass(p, cls);
  } // end if
} // end removeItemClassFromChild()






















