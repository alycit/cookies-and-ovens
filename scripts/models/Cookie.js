var Cookie = function(bakeTime, cookieType) {
  var bakeTime = bakeTime;
  var cookieType = cookieType;
  var timeBaked = 0;
  var id = new Date().getTime();

  this.getId = function() {
    return id;
  }

  this.getCookieType = function() {
    return cookieType;
  }

  this.getBakeTime = function() {
    return bakeTime;
  }

  this.getTimeBaked = function() {
    return timeBaked;
  }

  this.setTimeBaked = function(newTime) {
    timeBaked = newTime;
  }
}

Cookie.prototype = {
  getState: function() {
    var percentCompleted = this.getTimeBaked()/this.getBakeTime();

    if (percentCompleted > 1) {
      return "crispy"
    } else if (percentCompleted > 0.8) {
      return "just_right"
    } else if (percentCompleted > 0.5) {
      return "still_gooey"
    } else {
      return "raw"
    }
  },
  bake: function() {
    this.setTimeBaked(this.getTimeBaked() + 1);
  }
}
