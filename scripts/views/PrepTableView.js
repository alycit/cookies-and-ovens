var PrepTableView = {

  getBakeTime: function() {
    return $("input[name=bake_time]").val();
  },
  getCookieType: function() {
    return $("input[name=batch_type]").val();
  },
  setBakeTime: function(time) {
    return $("input[name=bake_time]").val(time);
  },
  setCookieType: function(type) {
    return $("input[name=batch_type]").val(type);
  },
  getNewBatchForm: function() {
    return $("#new_batch");
  },
  getBatches: function() {
    return $("#prep_batches");
  },
  getCookieId: function(target) {
    return $(target).parent().attr("data-id");
  },
  renderCookie: function(cookie) {
    // load template
    var html = $('<li><span class="cookie-type"></span><button class="add">Add to Oven</button></li>');
    // set cookie id
    html.attr("data-id", cookie.getId())
    // set cookie type
    html.find(".cookie-type").text(cookie.getCookieType())
    // insert into DOM
    this.getBatches().append(html)
  },
  removeCookie: function(id) {
    $("ul").find("[data-id='" + id + "']").remove()
  },
  resetForm: function() {
    this.setBakeTime("");
    this.setCookieType("");
  }
}
