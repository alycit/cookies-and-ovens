var PrepTable = function() {
  var _cookies = [];

  var initialize = function() { }

  this.addCookie = function(cookie) {
    _cookies.push(cookie);
    $.Topic("PrepTable:addCookieToPrepTable").publish(cookie);
  }

  this.moveCookieToOven = function(id) {
    var cookie = findCookie(id);
    removeCookie(cookie);
    $.Topic("PrepTable:moveCookieToOven").publish(cookie);
  }

  var removeCookie = function(cookie) {
    var index = _cookies.indexOf(cookie);
    _cookies.splice(index, 1);
    $.Topic("PrepTable:removeCookieFromPrepTable").publish(cookie);
  }

  var findCookie = function(id) {
    var result = null;
    $(_cookies).each(function(i, cookie) {
      if (cookie.getId() == id) {
        result = cookie;
        return false;
      }
    });

    return result;
  }

  initialize();
}