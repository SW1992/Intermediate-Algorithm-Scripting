// Sum All Primes Bonfire Solution
function sumPrimes(num) {
  var primeArr = [];
  // array to store prime numbers
  var numArr = [];
  // array to store all numbers up to prime number
  for (var i = 2; i <= num; ++i) {
  // SO Sieve of Eratosthenes implementation  
    if (!numArr[i]) { 
    // i has not been marked -- it is prime
      primeArr.push(i);
      for (var x = i << 1; x <= num; x += i) {
        numArr[x] = true;
         }
       }
   } 
   var primeSum = primeArr.reduce(function(total,currentVal) {
     // sum all prime numbers together & store result
     return total + currentVal;
   });
   return primeSum;
   // return result
}

sumPrimes(10);