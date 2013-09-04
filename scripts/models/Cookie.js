var Cookie = function(bakeTime, cookieType) {
  this.attributes = {
    timeBaked:  0,
    bakeTime:   parseInt(bakeTime),
    cookieType: cookieType,
    id:         new Date().getTime()
  }
}

Cookie.prototype = {
  getId: function() {
    return this.attributes.id
  },
  getCookieType: function() {
    return this.attributes.cookieType
  },
  getTimeBaked: function() {
    return this.attributes.timeBaked
  },
  getState: function() {
    percentCompleted = this.attributes.timeBaked/this.attributes.bakeTime

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
    this.attributes.timeBaked = this.attributes.timeBaked + 1
  }
}
