function isPrime(n) {
  if (n < 2) {
    //for no. -ve no, 0, 1
    return false;
  }

  //if n > 1, check if n is divisble by any smaller no.
  //   for (let i = 2; i < n; i++) {
  //     //start index at 2 because every no. is divisble by 1
  //     //end index <n because n is always divisble by iteself
  //     //check if n is divisble by i
  //     if (n % i === 0) {
  //       return false; //not prime no.
  //     }
  //   }

  //Big - O = O(n) - linear TC - as 1 loop

  //optimal solution -

  for (let i = 2; i <= Math.sqrt(n); i++) {
    //start index at 2 because every no. is divisble by 1
    //end index <n because n is always divisble by iteself
    //check if n is divisble by i
    if (n % i === 0) {
      return false; //not prime no.
    }
  }
  return true; //prime no. - no smaller no. could not divide n
}

console.log(isPrime(1)); //false
console.log(isPrime(4)); //false
console.log(isPrime(5)); //true

//For optimal solution - Big - O = O(sqrt(n)) - as value of n increases, no. of time line 7 (statement inside for loop) executes increases but not in same proportion - so time complexity of optimized solution is O(sqrt(n)) not O(n)
