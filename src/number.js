function Number(){};

Number.prototype.count = function(){
  var array = [];
  for(var i=1; i<=100;i++){
    if (i % 15 === 0){
      array.push("FizzBuzz");
    } else {
      array.push(i);
    };
  };
  return array;
}