// Roman Numeral Converter Bonfire Solution
function convertToRoman(num) {
  var strConvert;
  var arrConvert;
  var thousandthPlace;
  var hundredthPlace;
  var tensPlace;
  var onesPlace;
  var romanThousandth;
  var romanHundredth;
  var romanTens;
  var romanOnes;
  var romanStr;
  var romanNumeLookup = {
    0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM"   
  };
  strConvert = num.toString();
  // turn number to string to check length
  if (strConvert.length == 4) {
   // number in the thousands place
   arrConvert = strConvert.split("");
   // split string into array of sub-strings
   thousandthPlace = arrConvert.splice(0,1);
   hundredthPlace = arrConvert.splice(0,1);
   tensPlace = arrConvert.splice(0,1);
   onesPlace = arrConvert.splice(0,1);
   // splice to seperate array into individual place values
   thousandthPlace = Number(thousandthPlace[0]) * 1000;
   hundredthPlace = Number(hundredthPlace[0]) * 100;
   tensPlace = Number(tensPlace[0]) * 10;
   onesPlace = Number(onesPlace[0]);
   // convert to numbers & multiply accordingly
   romanThousandth = romanNumeLookup[thousandthPlace];
   romanHundredth = romanNumeLookup[hundredthPlace];
   romanTens = romanNumeLookup[tensPlace];
   romanOnes = romanNumeLookup[onesPlace];
   // get correct roman numeral conversion from lookup
   return romanThousandth.concat(romanHundredth,romanTens,romanOnes);
   // return concatenated roman numeral string answer
  }
  else if (strConvert.length == 3) {
    // number in the hundreds place
   arrConvert = strConvert.split("");

   hundredthPlace = arrConvert.splice(0,1);
   tensPlace = arrConvert.splice(0,1);
   onesPlace = arrConvert.splice(0,1);
   
   hundredthPlace = Number(hundredthPlace[0]) * 100;
   tensPlace = Number(tensPlace[0]) * 10;
   onesPlace = Number(onesPlace[0]);
   
   romanHundredth = romanNumeLookup[hundredthPlace];
   romanTens = romanNumeLookup[tensPlace];
   romanOnes = romanNumeLookup[onesPlace];
    
   return romanHundredth.concat(romanTens,romanOnes);
   
  }
  else if (strConvert.length == 2) {
    // number in the tens place
    arrConvert = strConvert.split("");
    
   tensPlace = arrConvert.splice(0,1);
   onesPlace = arrConvert.splice(0,1);
    
   tensPlace = Number(tensPlace[0]) * 10;
   onesPlace = Number(onesPlace[0]);
    
   romanTens = romanNumeLookup[tensPlace];
   romanOnes = romanNumeLookup[onesPlace];
    
   return romanTens.concat(romanOnes);
  }
  else {
    // number in the ones place
    arrConvert = strConvert.split("");
    
    onesPlace = arrConvert.splice(0,1);
    
    onesPlace = Number(onesPlace[0]);
    
    romanOnes = romanNumeLookup[onesPlace];
    
    return romanOnes;
  }
}

convertToRoman(36);