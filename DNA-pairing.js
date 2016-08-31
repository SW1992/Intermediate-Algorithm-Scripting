// DNA Pairing Bonfire Solution
function pairElement(str) {
  var twoDimeArr = [];
  var basePairArr = [];
  var pairStrOne = "";
  var pairStrTwo = "";
  var basePairStr = "";
  var charArr = str.split("");
  // split given string into array of chars
 for (var x = 0; x < charArr.length; x++) {
   pairStrOne = charArr[x];
   // store current loop item in first string
   if (pairStrOne === "C") {
     pairStrTwo = "G";
     // set other string to matching base pair value
     basePairStr = pairStrOne + pairStrTwo;
     // concatenate matching pair together
     basePairArr = basePairStr.split("");
     // split string into base pair array
     twoDimeArr.push(basePairArr);
     // push whole array to twoDimeArr 
     // it will become two dimensional, when an array is pushed to it
   }
   else if (pairStrOne === "G") {
     pairStrTwo = "C";
     basePairStr = pairStrOne + pairStrTwo;
     basePairArr = basePairStr.split("");
     twoDimeArr.push(basePairArr);  
   }
   else if (pairStrOne === "T") {
     pairStrTwo = "A";
     basePairStr = pairStrOne + pairStrTwo;
     basePairArr = basePairStr.split("");
     twoDimeArr.push(basePairArr);  
   }
   else {
   // pairStrOne equal to A
     pairStrTwo = "T";
     basePairStr = pairStrOne + pairStrTwo;
     basePairArr = basePairStr.split("");
     twoDimeArr.push(basePairArr);  
   }
 }
  return twoDimeArr;
}

pairElement("GCG");
