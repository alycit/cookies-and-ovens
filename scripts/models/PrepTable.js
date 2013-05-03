var PrepTable = function() {
  this.attributes = {
    cookies: []
  }
}

PrepTable.prototype = {
  addCookie: function(cookie) {
    this.attributes.cookies.push(cookie);
    $.Topic("PrepTable:addingCookieToPrepTable").publish(cookie);
  },
  moveCookieToOven: function(id) {
    var cookie = this.findCookie(id);
    this.removeCookie(cookie);
    $.Topic("PrepTable:movingCookieToOven").publish(cookie);
  },
  removeCookie: function(cookie) {
    var index = this.attributes.cookies.indexOf(cookie);
    this.attributes.cookies.splice(index, 1);
    $.Topic("PrepTable:removingCookieFromPrepTable").publish(cookie);
  },
  findCookie: function(id) {
    var result = null;
    $(this.attributes.cookies).each(function(i, cookie) {
      if (cookie.getId() == id) {
        result = cookie;
        return false;
      }
    });

    return result;
  }
}