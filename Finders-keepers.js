// Finders Keepers Bonfire Solution
function findElement(arr, func) {
  var filteredArr = arr.filter(func);
  var firstElem = filteredArr[0];
  return firstElem;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
