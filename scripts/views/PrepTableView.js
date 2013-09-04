var PrepTableView = {
  initialize: function() {
    var prepTable = new PrepTable()
    var that = this

    // event handler for submitting form
    $(this.formSelector).submit(function(e) {
      e.preventDefault()

      var bakeTime   = $(that.bakeTimeSelector).val(),
          cookieType = $(that.cookieTypeSelector).val()

      var cookie = new Cookie(bakeTime, cookieType)
      prepTable.addItem(cookie)

      // reset form
      $(that.cookieTypeSelector+","+that.bakeTimeSelector).val('')

      // display cookie on page
      that.renderCookie(cookie)
    })

    $(this.listSelector).on("click", ".add", function(e) {
      var id = $(this).parent().attr("data-id")

      cookie = prepTable.removeItem(id)

      // publish event
      $.Topic("moveCookie").publish(cookie)

      // remove cookie from preptable
      that.removeCookie(id)
    })
  },
  listSelector: "#prep_batches",
  formSelector: "#new_batch",
  cookieTypeSelector: "input[name=batch_type]",
  bakeTimeSelector: "input[name=bake_time]",
  cookieTemplate: '<li><span class="cookie-type"></span><button class="add">Add to Oven</button></li>',
  renderCookie: function(cookie) {
    // load template
    var html = $(this.cookieTemplate)
    // set cookie id
    html.attr("data-id", cookie.getId())
    // set cookie type
    html.find(".cookie-type").text(cookie.getCookieType())
    // insert into DOM
    $(this.listSelector).append(html)
  },
  removeCookie: function(id) {
    $("ul").find("[data-id='" + id + "']").remove()
  }
}
