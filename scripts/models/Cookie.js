var Cookie = function(bakeTime, cookieType) {
  // private members
  var _timeBaked = 0,
      _bakeTime  = 1,
      _cookieType,
      _id;

  var initialize = function(bakeTime, cookieType) {
    _id = new Date().getTime();
    _cookieType = cookieType;
    _bakeTime   = parseInt(bakeTime);
  }

  this.bake = function() {
    _timeBaked = _timeBaked + 1;
    $.Topic("Cookie:bake").publish(this);
  }

  this.getCookieType = function() {
    return _cookieType;
  }

  this.getId = function() {
    return _id;
  }

  this.getTimeBaked = function() {
    return _timeBaked;
  }

  this.getState = function() {
    percentCompleted = _timeBaked/_bakeTime;

    if (percentCompleted > 1) {
      return "crispy";
    } else if (percentCompleted > 0.8) {
      return "just_right";
    } else if (percentCompleted > 0.5) {
      return "still_gooey";
    } else {
      return "raw";
    }
  }

  initialize(bakeTime, cookieType);
}