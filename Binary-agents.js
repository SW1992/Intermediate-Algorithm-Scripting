// Binary Agents Bonfire Solution
function binaryAgent(str) {
var charNum, engChar, sum, pow, dec;
var biTrans = "";
var biArr = str.split(" ");
  for (var i = 0; i < biArr.length; i++) {
    pow = 7;
    dec = 0;
    // reset variables
    for (var x = 0; x < biArr[i].length; x++) {
      charNum = biArr[i].charCodeAt(x);
      if (pow === 0 && charNum === 49) {
      // pow at 0 & char was a 1
        sum = Math.pow(2,pow);
        dec += sum;
        engChar = String.fromCharCode(dec);
        biTrans += engChar;
      }
      else if (pow === 0 && charNum === 48) { 
      // pow at 0 & char was a 0
        engChar = String.fromCharCode(dec);
        biTrans += engChar;
      }
      else if (charNum === 49) { 
      // char was a 1
        sum = Math.pow(2,pow);
        dec += sum;
        pow--;
      }
      else {
      // char was a 0, so isn't counted
        pow--;
      }
    }
  }
  return biTrans;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
