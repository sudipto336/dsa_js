// function isPowerofTwo(n) {
//   //   for (let i = 0; i < n; i++) {
//   //     if (n === Math.pow(2, i)) {
//   //       return true;
//   //     }
//   //   }
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     //loop will run as long as n > 1
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true; //n = 1 and remainder has always been 0
// }

//Big - O = O(logn) - (in each iteration, value of n reduces by half) - no. of instruction execution increases as n grows but not by same amount

//optimal solution - Using bitwise operator - constant time complexity - better solution

function isPowerofTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0; //Bitwise and operator
}

console.log(isPowerofTwo(1)); //true
console.log(isPowerofTwo(2)); //true
console.log(isPowerofTwo(4)); //true
console.log(isPowerofTwo(5)); //false

//Big - O = O(1) - constant - irresepective how large n is, line 34 will be exeucted once
