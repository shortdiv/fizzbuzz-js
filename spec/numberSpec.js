describe("FIZZBUZZ", function() {

  describe("Which Fizzbuzz", function(){

    it("should return fizzbuzz for a multiple of 15", function(){
      expect(which_fizzbuzz(45)).toEqual("fizzbuzz")
    });

    it("should return buzz for multiple of 5", function(){
      expect(which_fizzbuzz(20)).toEqual("buzz");
    });

    it("should return fizz for multiple of 3", function(){
      expect(which_fizzbuzz(6)).toEqual("fizz");
    });

    it("should return fizzbuzz for multiple of 15 and 5", function(){
      expect(which_fizzbuzz(75)).toEqual("fizzbuzz");
    });

    it("should return counter for non multiple of 3,5 and 15", function(){
      expect(which_fizzbuzz(23)).toEqual(23);
    });

  });

  describe("fizzbuzz()", function() {

    beforeEach(function() {
      spyOn(window, 'which_fizzbuzz');
    });

   it("should count from 0 to 100 as a default", function(){
      fizzbuzz();
      expect(window.which_fizzbuzz.calls.count()).toEqual(100);
    });

    it("should count from 0 to 100", function(){
      fizzbuzz(100);
      expect(window.which_fizzbuzz.calls.count()).toEqual(100);
    });

    it("should count from 0 to 1000", function(){
      fizzbuzz(1000);
      expect(window.which_fizzbuzz.calls.count()).toEqual(1000);
    });

  });

});