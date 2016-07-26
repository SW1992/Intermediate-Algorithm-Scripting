// Spinal Tap Case Bonfire Solution:
function spinalCase(str) {
  var spaceWord = str.replace(/([A-Z])/g, " $1");
  // space stuck together words
  var removeLeading = spaceWord.replace(/\B\s/g, "");
  // remove leading space, replace with no space
  var removeUnder = removeLeading.replace(/_/g, "");
  // remove underscores, replace with no space 
  var toLower = removeUnder.toLowerCase();
  // lower case string
  var replaceStr = toLower.replace(/\s/g,"-");
  // replace whitespace left in strings, with a dash
  return replaceStr; 
}

spinalCase('This Is Spinal Tap');
