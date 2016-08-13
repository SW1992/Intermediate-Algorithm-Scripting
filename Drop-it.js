// Drop it Bonfire Solution
function dropElements(arr, func) { 
  var filteredArr;
  var sliceFrom;
  var dropArr;
  filteredArr = arr.filter(func);
  // filter out false values
  sliceFrom = arr.indexOf(filteredArr[0]);
  // get index of first item that returned true 
  if (sliceFrom === -1) {
  // if search unsuccessful
    dropArr = [];
    // set this to empty array
  }
  else {
    dropArr = arr.slice(sliceFrom);
    // else, slice from that items index, to end of arr
  }
  return dropArr;
  // return result
}

dropElements([1, 2, 3], function(n) {return n < 3; });