describe("Number", function(){

  it("should check if a number is divisible by 15", function(){
    expect(is_fizzbuzz(45)).toEqual(true);
  });

  it("should check if a number is divisible by 5", function(){
    expect(is_buzz(10)).toEqual(true);
  });

  it("should check if a number is divisible by 3", function(){
    expect(is_fizz(6)).toEqual(true)
  });

});