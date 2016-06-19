// Diff Two Arrays Bonfire Solution
function diffArray(arr1, arr2) {
  var newArr = [];
  var arr1Copy = arr1.slice(0);
  var arr2Copy = arr2.slice(0);
  var arrayLoop;
  var otherArray;
  var firstFilter;
  var secondFilter;
  // Same, same; but different.
  function callback (item) {
    if (otherArray.indexOf(item) === -1) {
      // if value not found in array, keep it
      return true;  
    }
    else {
      // if it's found, don't keep it 
      return false;
    }
  }
  // create new arrays from elements that pass the test & return true
  otherArray = arr2Copy;
  firstFilter = arr1Copy.filter(callback);

  otherArray = arr1Copy;
  secondFilter = arr2Copy.filter(callback);
  
  // concatenate results together in new array, comprised of the values unique to each array
  newArr = firstFilter.concat(secondFilter);
  
  // return result
  return newArr; 
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);