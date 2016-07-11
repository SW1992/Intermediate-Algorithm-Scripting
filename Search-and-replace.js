// Search and Replace Bonfire Solution
function myReplace(str, before, after) {
  var searchReplace; 
  var firstChar;
  var toUpper;
  var toLower;
  var subStrArr;
  var validStr;
  subStrArr = before.split("");
  // split before string into sub-string array
  firstChar = subStrArr.splice(0,1);
  // splice first character out of array
  // original array is changed
  firstChar = firstChar.join();
  // join first character back into string
  if (firstChar == firstChar.toUpperCase()) {
    // if first character of before capitalized
    subStrArr = after.split("");
    // split into sub-string array
    firstChar = subStrArr.splice(0,1);
    // splice first character out of array
    firstChar = firstChar.join();
    // join back into string
    toUpper = firstChar.toUpperCase();
    // capitalize first character
    subStrArr.splice(0,0,toUpper);
    // insert upper cased letter at beginning of array
    validStr = subStrArr.join("");
    // join subStrArr back into string
    searchReplace = str.replace(before,validStr);  
    // replace before, with validStr
  }
  else if (firstChar == firstChar.toLowerCase()) {
    // if first character of before not capitalized
    subStrArr = after.split("");
    // split into sub-string array
    firstChar = subStrArr.splice(0,1);
    // splice first character out of array
    firstChar = firstChar.join();
    // join back into string
    toLower = firstChar.toLowerCase();
    // lower case first character
    subStrArr.splice(0,0,toLower);
    // insert lower cased letter at beginning of array
    validStr = subStrArr.join("");
    // join subStrArr back into string
    searchReplace = str.replace(before,validStr);
    // replace before, with validStr
  }
  return searchReplace;
  // return result 
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
