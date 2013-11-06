var OvenController = function() {
	var oven = new Oven();
	var ovenView = OvenView;

	function bake() {
		oven.bake();

	  oven.each(function(cookie) {
	    ovenView.updateCookieState(cookie);
	  })
	}

	function moveCookie(cookie) {
	  oven.addItem(cookie);
	  ovenView.renderCookie(cookie);
	  alert(cookie.getCookieType() + " is in the oven!");
	}
	
	return {
		initialize: function() {
			ovenView.getBakeButton().on("click", bake);
			$.Topic("moveCookie").subscribe(moveCookie);
		}
	}
}(); 
