// Sum All Numbers in a Range Bonfire Solution
/* jshint esversion: 6 */
// esversion specifies ECMA Script version code adheres too
function sumAll(arr) {
  var newArr =[];
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  // find max & min number from arr, both methods are static
  for (var i = min; i < max + 1; i++) {
    // for min & max & numbers inbetween 
    // loop & create arr values where neccesary
     newArr.push(i);
    // push to new ordered array
  }
 function getSum(previousVal, currentVal) {
    return previousVal + currentVal;
    // previousVal has no intial val, so starts out as the value of index element 0
    // previousVal then acts as a running total
   // currentVal starts at index element 1, then shifts through other array elements
  } 
  return newArr.reduce(getSum);
  // the reduce method runs a callback function on each element in the arr
  // it reduces an array down to a single total 
  // the final value returned by reduce, will be the value of the final callback invocation.
}
sumAll([1, 4]);