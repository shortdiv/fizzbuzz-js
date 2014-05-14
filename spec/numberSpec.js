describe("Number", function(){
  it ("should return fizzbuzz for the 15th number", function(){
    var hundreds = new Number();
    var array = hundreds.count();
    expect(array[14]).toBe("FizzBuzz");
  });

  it("should return buzz for multiples of 5", function(){
    var number = new Number();
    var array = number.count();
    expect(array[4]).toBe("Buzz");
  });
});