/**
* @class pageNav
* @constructor
**/
function PageNav(container) {
  var that = this;
  if (typeof container === "string") {
    this.container = dome.select(container);
    this.items = this.container.selectAll(".page-nav__site-item");
    this.links = this.container.selectAll(".page-nav__link");
    this.links.addEventListener("click", function (event) {
      event.preventDefault();
      that.deActiveAllItems("page-nav__site-item--active");
      PageNav.activeItem(this, "page-nav__site-item--active");
    }, false);
    this.toggleLink = this.container.select(".page-nav__toggle-link");
    this.toggleLink.addEventListener("click", function (event) {
      event.preventDefault();
      PageNav.toggleItemClassFromLink(this, "page-nav__more-toggle--active");
    });
    dome.select(document).addEventListener("click", function (event) {
      var target = event.target;
      while (target !== null && target !== that.toggleLink[0]) {
        target = target.parentNode;
      } // end while
      if (target !== that.toggleLink[0]) {
        PageNav.removeItemClassFromLink(that.toggleLink[0], "page-nav__more-toggle--active");
      } // end if
    }, false);
  } // end if
}; // end pageNav()

/**
* 清除所有item的active标记
* @method deActiveAllItems
* @param cls {string} 给item添加的类，用于标记激活状态
* @chainable
**/
PageNav.prototype.deActiveAllItems = function (cls) {
  this.items.removeClass(cls);
  return this;
}; // end deActiveAllItems()

/**
* 从link设置item的active标记
* @method activeItem
* @param link {Element} 需要标记active的item下的link
**/
PageNav.activeItem = function (link, cls) {
    var p = link.parentNode;
    while (p !== null && !dome.hasClass(p, "page-nav__site-item")) {
      p = p.parentNode;
    } // end while
    if (p !== null) {
      dome.addClass(p, cls);
    } // end if
}; // end activeItem()
/**
* toggle link父节点的.page-nav__site-item的class
* @method toggleItemClassFromLink
* @param link {Element} 需要修改父节点class的link
* @param cls {string} 需要toggle的class
**/
PageNav.toggleItemClassFromLink = function (link, cls) {
  var p = link.parentNode;
  while (p !== null && !dome.hasClass(p, "page-nav__site-item")) {
    p = p.parentNode;
  } // end while
  if (p !== null) {
    dome.toggleClass(p, cls);
  } // end if
}; // end toggleItemClassFromLink()
/**
* remove link父节点的.page-nav__site-item的class
* @method removeItemClassFromLink
* @param link {Element} 需要删除父节点class的link
* @param cls {string} 需要删除的class
**/
PageNav.removeItemClassFromLink = function (link, cls) {
  var p = link.parentNode;
  while (p !== null && !dome.hasClass(p, "page-nav__site-item")) {
    p = p.parentNode;
  } // end while
  if (p !== null) {
    dome.removeClass(p, cls);
  } // end if
}; // end removeItemClassFromLink()

















