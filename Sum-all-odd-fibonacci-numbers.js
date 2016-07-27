// Sum All Odd Fibonacci Numbers Bonfire Solution
function sumFibs(num) {
  var fibsArr = [1,1];
  // intialize array for fibonacci numbers
  var preVal;
  var currVal;
  var fibNum;
  // variables to use for calculating fibonacci numbers
  for ( var x = 1; x <= num; x++ ) {
    preVal = fibsArr[x-1];
    // equal to previous value in fibs array
    currVal = fibsArr[x];
    // equal to current value, or last added value
    fibNum = preVal + currVal;
    // equal to sum of last two numbers in sequence
    fibsArr.push(fibNum);
    // push next number in fibonacci sequence to array
    // will contain even numbers aswell, at this point    
  } 
  var oddFibsArr = fibsArr.filter(function(element) {
    if (element % 2 !== 0 && element <= num) {
    // then the number is odd, and less than or equal to num
      return true;
      // so keep it
    }
    else {
    // the number is even, or higher than num
      return false;
      // so discard it
    }
  });
  var oddFibsSum = oddFibsArr.reduce(function(total,currentValue) {
    // sum all odd fibonacci numbers left together
    return total + currentValue; 
  },0);
  return oddFibsSum;
  // return result
}

sumFibs(4);