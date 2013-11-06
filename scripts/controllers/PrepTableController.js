var PrepTableController = function() {
	var prepTable = new PrepTable();
	var prepTableView = PrepTableView;

	function createBatch(event) {
    event.preventDefault();
    var cookie = new Cookie(prepTableView.getBakeTime(), prepTableView.getCookieType())
    prepTable.addItem(cookie);
    prepTableView.resetForm();   
    prepTableView.renderCookie(cookie);
  }

  function moveBatch(event) {
    var id = prepTableView.getCookieId(event.target);
    cookie = prepTable.removeItem(id);
    $.Topic("moveCookie").publish(cookie);
    prepTableView.removeCookie(id);
  }
	
	return {
		initialize: function() {
			prepTableView.getNewBatchForm().on("submit", createBatch);
			prepTableView.getBatches().on("click", ".add", moveBatch);
		}
	}
}(); 