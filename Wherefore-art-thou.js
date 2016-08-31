// Wherefore art thou Bonfire Solution 
function whatIsInAName(collection, source) {
  var arr = [];
  // for result
  var prop = null;
  // for source prop loop
  var objectKeys = Object.keys(collection);
  // get array of non negative integers to loop over
  var sourceKeys = Object.keys(source);
  // get source keys array for second loop
  var propMatchCount = null;
  // variable to keep count of matching properties
  for (var i = 0; i < objectKeys.length; i++) {
   var obj =  collection[objectKeys[i]];
   // get object from collection
   propMatchCount = 0;
   // set intial value & reset to zero if value has been increased
    for (prop in source) {
      if (obj.hasOwnProperty(prop) && source[prop] === obj[prop]) {
      // if object contains source property & values are equal
        propMatchCount = propMatchCount + 1;
        // increase prop match count variable by 1
        if (sourceKeys.length == propMatchCount) {
        // if all props match
          arr.push(obj);
          // push whole object to array
        }  
      }
    }
  }
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
