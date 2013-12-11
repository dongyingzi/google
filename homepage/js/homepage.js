/**
* 需要dome.js
**/
(function () {
  dome.select(window).addEventListener("load", function () {
    var pageNav = new PageNav("#head-nav");
    var account = new Account(".account-container");  
  }, false);

}());