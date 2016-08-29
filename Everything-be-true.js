// Everything Be True Bonfire Solution
function truthCheck(collection, pre) {
  var allTruthy;
  for (var x = 0; x < collection.length; x++) {
    if (!collection[x][pre]) {
    // if value cannot be converted to true
        return false;
      }
    else {
    // else, continue setting this to true 
        allTruthy = true;
    }  
  }
  return allTruthy;
  // if reached, all object values were truthy
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
