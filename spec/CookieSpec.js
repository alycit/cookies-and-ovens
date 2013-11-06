describe("Cookie", function() {
  var cookie;

  beforeEach(function() {
    cookie = new Cookie(15, "Oatmeal");
  });

  describe("Creating a cookie", function(){

    it("should have a bakeTime", function() {
      expect(cookie.getBakeTime()).toBe(15);
    });

    it("should have a cookieType", function() {
      expect(cookie.getCookieType()).toBe("Oatmeal");
    });

    it("should have a timeBaked that initializes to zero", function() {
      expect(cookie.getTimeBaked()).toBe(0);
    });

    it("should have an id that initializes to the current date time", function() {
      expect(cookie.getId()).toBeDefined();
    });
  });

  describe("Interacting with a Cookie", function(){

    describe("baking a cookie", function(){
      it("should increase timeBaked", function(){
        cookie.bake();
        expect(cookie.getTimeBaked()).toBe(1);
      });
    });

    describe("baking state", function(){

      it("should be crispy if time is expired", function(){
        cookie.setTimeBaked(16);
        expect(cookie.getState()).toBe("crispy");
      });

      it("should be raw if it's 50% done", function(){
        spyOn(cookie, "getTimeBaked").andReturn(5);
        spyOn(cookie, "getBakeTime").andReturn(10);
        expect(cookie.getState()).toBe("raw");
        expect(cookie.getTimeBaked).toHaveBeenCalled();
        expect(cookie.getBakeTime).toHaveBeenCalled();
      });
    });
    
  });
});