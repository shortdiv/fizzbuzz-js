describe("Number", function(){
  it ("should return fizzbuzz for the 15th number", function(){
    var hundreds = new Number();
    var array = hundreds.count()
    expect(array[14]).toBe("FizzBuzz");

  })
});