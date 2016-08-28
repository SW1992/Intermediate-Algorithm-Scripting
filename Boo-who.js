// Boo who Bonfire Solution:
function booWho(bool) {
  if (typeof bool === "boolean") {
  // if passed in value is a boolean primitive
    return true;
  }
  else {
    return false; 
  }
}

booWho(null);
