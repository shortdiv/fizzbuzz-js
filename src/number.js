function Number(){};

Number.prototype.count = function(){
  var array = [];
  for(var i=1; i<=100;i++){
    if (i % 15 === 0){
      array.push("FizzBuzz");
    } else if(i % 5 === 0){
      array.push("Buzz");
    } else if(i % 3 === 0){
      array.push("Fizz");
    } else {
      array.push(i);
    };
  };
  return array;
}