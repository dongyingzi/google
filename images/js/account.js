function Account(selector) {
  this.account = dome.selectAll(selector);
  this.items = this.account.selectAll(".account__operation-item");
  this.togger = this.account.selectAll(".app__list-toggle");
  this.togger.addEventListener("click", function (event) {
    var target = event.target;
    var cls = target.dataset.appContainer;
    while (target !== null && target.nodeType === 1
      && !dome.hasClass(target, cls)) {
      target = target.nextElementSibling;
    } // end while
    if (target !== null && target.nodeType === 1) {
      dome.toggleClass(target, "app__list-container--active");
    } // end if
  }, false);
} // end Account()