function fibonacci(n) {
  //n -> no. of no.s to be present in fibonacci sequence
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    //start index at 2 because at index 0 and 1, already 2 elements are added
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci(2)); //[0, 1]
console.log(fibonacci(3)); //[0, 1, 1]
console.log(fibonacci(7)); //[0, 1, 1, 2, 3, 5, 8]

//Big - O = O(n) - linear time complexity - as 1 loop - as value of n increases, no. of time line 7 (for loop statement - code inside for loop) executes also increases
