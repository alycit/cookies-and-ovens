var Oven = function() {
  this.attributes = {
    cookies: []
  }
}

Oven.prototype = {
  addCookie: function(cookie) {
    this.attributes.cookies.push(cookie);
  },
  bake: function() {
    $(this.attributes.cookies).each(function(i, cookie) {
      cookie.bake();
    });
  }
}