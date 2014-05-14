describe("Number", function(){

  it("should check if a number is divisible by 15", function(){
    expect(is_fizzbuzz(45)).toBe(true);
  });

  it("should check if a number is divisible by 5", function(){
    expect(is_buzz(10)).toBe(true);
  });

});