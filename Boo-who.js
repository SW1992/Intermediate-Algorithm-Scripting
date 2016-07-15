// Boo who Bonfire Solution:
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (typeof bool === "boolean") {
  // if passed in value is a boolean primitive
    return true;
  }
  else {
    return false; 
  }
}

booWho(null);