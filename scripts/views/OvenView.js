var OvenView = {
  initialize: function() {
    var oven = new Oven();
    var that = this;

    // event handler for bake button
    $(this.bakeButton).click(function(e) {
      oven.bake();
    });

    // listens to PrepTable
    $.Topic("PrepTable:moveCookieToOven").subscribe(function(cookie) {
      oven.addCookie(cookie);
      that.renderCookie(cookie);
      alert("Cookies in the oven!");
    });

    // listens to cookie
    $.Topic("Cookie:bake").subscribe(function(cookie) {
      console.log("updateCookieState()");
      that.updateCookieState(cookie);
    });

  },
  bakeButton: "#bake",
  cookieTemplate: '<div><span class="cookie-type"></span> [<span class="cookie-state"></span>]</div>',
  renderCookie: function(cookie) {
    var html = $(this.cookieTemplate);
    // set cookie id
    html.attr("data-id", cookie.getId());
    // set cookie type
    html.find(".cookie-type").text(cookie.getCookieType());
    // set cookie type
    html.find(".cookie-state").text(cookie.getState());

    var that = this;
    $("#oven td").each(function(i, td) {
      var $td = $(td);

      if ($td.html().length < 10) {
        $td.html(html);
        $td.addClass(cookie.getState());
        return false;
      }
    });
  },
  updateCookieState: function(cookie) {
    console.log(cookie.getId());
    console.log(cookie.getState());
    console.log(cookie.getTimeBaked());

    var $div = $("#oven").find("[data-id='" + cookie.getId() + "']");

    // update cookie state text
    $div.find(".cookie-state").text(cookie.getState());

    // update td class
    $td = $div.parent();
    $td.removeClass($td.attr("class")).addClass(cookie.getState());
  }
}