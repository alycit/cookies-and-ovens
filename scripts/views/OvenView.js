var OvenView = {
  getBakeButton: function() {
    return $("#bake");
  },
  renderCookie: function(cookie) {
    var html = $('<div><span class="cookie-type"></span> [<span class="cookie-state"></span>]</div>')
    // set cookie id
    html.attr("data-id", cookie.getId())
    // set cookie type
    html.find(".cookie-type").text(cookie.getCookieType())
    // set cookie type
    html.find(".cookie-state").text(cookie.getState())

    $("#oven td").each(function(i, td) {
      var $td = $(td)

      if ($td.html().length < 10) {
        $td.html(html)
        $td.addClass(cookie.getState())
        return false;
      }
    })
  },
  updateCookieState: function(cookie) {
    // load cookie div
    var $div = $("#oven").find("[data-id='" + cookie.getId() + "']")

    // update cookie state text
    $div.find(".cookie-state").text(cookie.getState())

    // update td class
    $td = $div.parent()
    $td.removeClass($td.attr("class")).addClass(cookie.getState())
  }
}
