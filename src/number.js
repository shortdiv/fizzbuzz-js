function is_fizzbuzz(counter){
  return counter % 15 === 0;
};

function is_buzz(counter){
  return counter % 5 === 0;
};

function is_fizz(counter){
  return counter % 3 === 0;
};

function which_fizzbuzz(counter){
  if (is_fizzbuzz(counter)){
    return('fizzbuzz');
  } else if (is_buzz(counter)){
    return('buzz');
  } else if(is_fizz(counter)){
    return('fizz');
  } else{
    return(counter);
  };
};

function fizzbuzz(count){
  count = count || 100;

  for (var counter = 1; counter <= count; counter++){
    console.log(which_fizzbuzz(counter));
  };
};