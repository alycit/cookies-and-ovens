var Oven = function() {
  var _cookies = [];

  this.addCookie = function(cookie) {
    _cookies.push(cookie);
  }

  this.bake = function() {
    $(_cookies).each(function(i, cookie) {
      cookie.bake();
    });
  }
}