describe("Cookie", function() {
  var cookie;
  var cookieType = "chocolate chip";

  beforeEach(function() {
    cookie = new Cookie(10, cookieType);
  });

  describe("#getCookieType", function() {
    it("should return the cookie type", function(){
      expect(cookie.getCookieType()).toEqual("chocolate chip");
    });
  });

  describe("#constructor", function() {
    it("require that bakeTime argument is numeric", function() {
      expect(function() { new Cookie("foo", cookieType)}).toThrow("bakeTime must be numeric");
    });

    it("requires two arguments", function() {
      expect(function() { new Cookie(10)}).toThrow("Invalid number of args");
    });
  });
});
