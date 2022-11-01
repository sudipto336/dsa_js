function factorial(n) {
  //n -> no. for which factorial to be calculated
  let result = 1;
  for (let i = 2; i <= n; i++) {
    //start index at 2 because multiplying by 1 has no effect
    result = result * i;
  }
  return result;
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(5)); //120
console.log(factorial(6)); //720
console.log(factorial(7)); //5040

//Big - O = O(n) - linear time complexity - as 1 loop - as value of n increases, no. of time line 7 (for loop statement - code inside for loop) executes also increases
