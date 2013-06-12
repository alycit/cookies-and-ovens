var PrepTableView = {
  initialize: function() {
    var prepTable = new PrepTable();
    var that = this;

    // event handler for submitting form
    $(this.formSelector).submit(function(e) {
      e.preventDefault();

      var bakeTime   = $(that.bakeTimeSelector).val(),
          cookieType = $(that.cookieTypeSelector).val();

      var cookie = new Cookie(bakeTime, cookieType);
      prepTable.addItem(cookie);

      $(that.cookieTypeSelector+","+that.bakeTimeSelector).val('');
    });

    $(this.listSelector).on("click", ".add", function(e) {
      var id = $(this).parent().attr("data-id");
      cookie = prepTable.moveItem(id);
    });

    // listens to PrepTable
    $.Topic("PrepTable:addingItem").subscribe(function(cookie) {
      that.renderCookie(cookie);
    });

    // listens to PrepTable
    $.Topic("PrepTable:removingItem").subscribe(function(cookie) {
      that.removeCookie(cookie);
    });
  },
  listSelector: "#prep_batches",
  formSelector: "#new_batch",
  cookieTypeSelector: "input[name=batch_type]",
  bakeTimeSelector: "input[name=bake_time]",
  cookieTemplate: '<li><span class="cookie-type"></span><button class="add">Add to Oven</button></li>',
  renderCookie: function(cookie) {
    // load template
    var html = $(this.cookieTemplate);
    // set cookie id
    html.attr("data-id", cookie.getId());
    // set cookie type
    html.find(".cookie-type").text(cookie.getCookieType());
    // insert into DOM
    $(this.listSelector).append(html);
  },
  removeCookie: function(cookie) {
    $("ul").find("[data-id='" + cookie.getId() + "']").remove();
  }
}
