// Convert HTML Entities Bonfire Solution: 
function convertHTML(str) {
  var pattern = /[&<>"']/g;
  // char matches to look for globally
  var replaceChar = null;
  // will hold replacement HTML special char
  var matchChar = str.match(pattern);
  // look for char to be replaced in string
  // returns matched char/chars in array object 
 if (matchChar === null) {
 // if char match returned null
    return str;
    // return unchanged string
  }
  else if (matchChar[0] === "&") {
  // if char match is an ampersand
    replaceChar = "&amp;";
    // set replaceChar to corresponding HTML special char
  }
  else if (matchChar[0] === "<" && matchChar[1] === ">") {
  // if char match is set of angular brackets
     replaceChar = "&lt;&gt;";
  }
  else if (matchChar[0] === "<" ) {
  // if char match is opening angular bracket
    replaceChar = "&lt;";
  }
  else if (matchChar[0] === ">") {
  // if char match is closing angular bracket
    replaceChar = "&gt;";
  }
  else if (matchChar[0] === '"') {
  // if char match is double quote
    replaceChar = "&quot;";         
  }
  else  {
 // char match is an apostrophe
    replaceChar = "&apos;";
  }
 var newStr = str.replace(pattern,replaceChar);
 // replace matched char's, with corresponding special character
 return newStr;
 // return result
}
convertHTML("Dolce & Gabbana");
