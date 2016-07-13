// Pig Latin Bonfire Solution
function translatePigLatin(str) {
  var charArr = str.split("");
  // split str into array of chars
  var consonantCount = null;
  // variable to total amount of consonants
  var lookUpLetter = null;
  // to look up letter type
  var letterType = null;
  // will be set to vowel or consonant
  var conSuffix = [];
  // array to push suffixed consonants too
  var strOne = null;
  var strTwo = null;
  var finalStr = null;
  // for string output
  var vowelConsonantLookup = {
    "a" : "vowel",
    "e": "vowel",
    "i": "vowel",
    "o": "vowel",
    "u": "vowel",
    "b": "consonant",
    "c": "consonant",
    "d": "consonant",
    "f": "consonant",
    "g": "consonant",
    "h": "consonant",
    "j": "consonant",
    "k": "consonant",
    "l": "consonant",
    "m": "consonant",
    "n": "consonant",
    "p": "consonant",
    "q": "consonant",
    "r": "consonant",
    "s": "consonant",
    "t": "consonant",
    "v": "consonant",
    "w": "consonant",
    "x": "consonant",
    "y": "consonant",
    "z": "consonant",
  };
  for (var x = 0; x < charArr.length; x++) {
    lookUpLetter = charArr[x];
    // assign current looped letter from array of chars
    letterType = vowelConsonantLookup[lookUpLetter];
    // look up all letters
    if (vowelConsonantLookup[charArr[0]] == "vowel") {
    // if first letter is vowel 
      strOne = charArr.join("");
      // join array back into string
      finalStr = strOne + "way";
      // concatenate suffix
      break;
      // stop loop
    }
    if (letterType == "consonant") {
    // if first & or, subsequent letters are consonants
      conSuffix.push(lookUpLetter);
      // push letter to suffix array
      consonantCount += 1;
      // add one to consonantCount value
    }
    else if (letterType == "vowel") {
    // when it reaches a vowel
      strOne = charArr.join("");
      // join whole array back together
      strOne = strOne.substr(consonantCount);
      // get other chars of word starting from consonantCount index
      strTwo = conSuffix.join(""); 
      // join suffix chars into second string
      finalStr = strOne + strTwo + "ay";
      // concatenate strings & suffix 
      break;
      // stop loop
    }
  }
  return finalStr;
}

translatePigLatin("consonant");