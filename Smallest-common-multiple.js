// Smallest Common Multiple Bonfire Solution 
function smallestCommons(arr) {
  var numRange = [];
  var x = 0;
  var commonCount = 0;
  var commonMulti = false;
  var lowestCommonMulti;
  arr.sort(function compareNum(a,b) {
    // sort nums in descending order
    return b - a;
  }); 
  for (var w = arr[0]; w >= arr[1]; w--) {
    // loop down num range largest to smallest 
    numRange.push(w);
    // push num in range to array
  } 
  while (commonMulti === false) {
    if (commonCount === numRange.length) {
      lowestCommonMulti = x;
      // set return var
      commonMulti = true;
      // stop loop
    }
    else {
      commonCount = 0;
      // reset counter 
      x += numRange[0];
      // increment x in multis of largest num, up to arbitrary val
    }
    for (var y = 0; y < numRange.length; y++) {
      if ( x % numRange[y] === 0) {
      // if x equally divisble into num in range
        commonCount++;
      }
    } 
  }
  return lowestCommonMulti;
  // return result
}
smallestCommons([1,5]);
