// Sorted Union Bonfire Solution
function uniteUnique(arr) {
  var argArrOne, argArrTwo, argArrThree, argArrFour;
  // variables to hold array arguments
  var flatArr, uniqueArr;
  // for joined array, an array result
  if (arguments.length == 2 ) {
    // if two arguments passed to function
    argArrOne = arr;
    argArrTwo = arguments[1];
    // access other function arguments, with arguments object
    flatArr = [argArrOne, argArrTwo].reduce(function(previousVal,currentVal) {
      return previousVal.concat(currentVal);
    });
    // flatten arrays down, to one array consisting of all values
  }
  else if (arguments.length == 3) {
    // if three arguments passed to function
    argArrOne = arr;
    argArrTwo = arguments[1];
    argArrThree = arguments[2];
    flatArr = [argArrOne, argArrTwo, argArrThree].reduce(function(previousVal,currentVal) {
      return previousVal.concat(currentVal);
    }); 
  }
  else {
    // four arguments passed to function
    argArrOne = arr;
    argArrTwo = arguments[1];
    argArrThree = arguments[2];
    argArrFour = arguments[3]; 
    flatArr = [argArrOne, argArrTwo, argArrThree, argArrFour].reduce(function(previousVal,currentVal) {
      return previousVal.concat(currentVal);
    }); 
  }
  uniqueArr = argArrOne;
  // set unique arr to values in first array regardless
  for (i = 0; i < flatArr.length; i++) {
    if (uniqueArr.indexOf(flatArr[i]) == -1) {
      // if current item in flat arr, not in uniqueArr
      uniqueArr.push(flatArr[i]);
      // push it to uniqueArr
     }
  }
  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
