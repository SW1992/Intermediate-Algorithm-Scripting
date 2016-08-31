// Arguments Optional Bonfire Solution 
function addTogether() {
  var firstArg = arguments[0];
  var secondArg = arguments[1];

  function NumCheck(Num) { 
    return typeof(Num) === "number";
  }
  var secondCall = function (secondArg) {
  // secondArg here = this functions param 
    if (NumCheck(secondArg) !== true) {
      return undefined;
    }
    else {
      return firstArg + secondArg;
    }
  };
  
  if (NumCheck(secondArg) === true) {
  // if intial function passed second num
    return firstArg + secondArg;
  }
  else if (NumCheck(firstArg) === true && secondArg === undefined) {
  // if first arg was a num & intial function not passed a second arg
    return secondCall;
  }
  else {
  // else, no nums or only 1 num passed to intial function
    return undefined;
  }
}

addTogether(2,3);