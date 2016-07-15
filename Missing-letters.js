// Missing letters Bonfire Solution
function fearNotLetter(str) {
  var otherCharUni = str.charCodeAt(0);
  // get unicode val of first character in string 
  var lastCharUni = str.charCodeAt(str.length - 1);
  // get unicode val of last character in string
  var missingLetter = "";
  // for missing letter 
  var fullRangeArr = []; 
  // for full range of letters
  var fullRangeItem = "";
  // for full range array items
  var uncompleteArr = str.split("");
  // for second loop
  while(otherCharUni < lastCharUni + 1) {
    fullRangeItem = String.fromCharCode(otherCharUni);
    // get character from current unicode value
    fullRangeArr.push(fullRangeItem);
    // push to array
    otherCharUni++; 
    // increase loop variable  
  }
  for (var x = 0; x < fullRangeArr.length; x++) {
    if (str.length === fullRangeArr.length) {
    // if there are no missing letters in original string
      return undefined;
    }
    else if (uncompleteArr.indexOf(fullRangeArr[x]) === -1) {
    // if current letter is not present in other array
      missingLetter = fullRangeArr[x];
      // set variable to current item in full range array
      return missingLetter;
    }
  }
}

fearNotLetter("abce");