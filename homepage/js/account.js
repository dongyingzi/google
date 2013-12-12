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
} // end Account()

/**
* 为元素父.account__item切换cls
* @method toggleItemClassFromChild
* @param element {Element} 需要为父.account__item切换cls的对象
* @param cls {string} 需要切换的class
**/
Account.toggleItemClassFromChild = function (element, cls) {
  var p = element.parentNode;
  while (p !== null && !dome.hasClass(p, "account__item")) {
    p = p.parentNode;
  } // end while
  if (p !== null) {
    dome.toggleClass(p, cls);
  } // end if
  
} // end toggleItemClassFromChild()






















