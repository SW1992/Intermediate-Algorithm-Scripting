// Steamroller Bonfire Solution
function steamrollArray(arr) {
  var flatArr = [];
  for (var x = 0; x < arr.length; x++) {
    if (Array.isArray(arr[x])) {
    // if item from arr is array 
      flatArr = flatArr.concat(steamrollArray(arr[x]));
      // recursively flatten array
    }
    else {
      flatArr.push(arr[x]);
      // push array items, non-arrays etc, to flatArr
    }
  }
  return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);