/**
 * @param {number} n - a positive integer
 * @return {number}
 *
 * Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).
 *
 *Example 1:
Input: 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

Example 2:
Input: 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

Example 3:
Input: 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 */

//the best solution time comp - 0(1), space comp - O(1)
var hammingWeight = function (n) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if (n & 1) count++;
    n >>= 1;
  }
  return count;
};

//there should be another optimal way, look for it
var hammingWeight = function (n) {
  console.log("initial num ", n);
  let stringNum = n.toString(2);
  let count = 0;
  for (let i = 0; i < stringNum.length; i++) {
    if (stringNum[i] === "1") count++;
  }

  return count;
};

// var hammingWeight = function(n) {
//     n = n.toString(2)
//     let counter = 0
//     for(let i = 0; i < n.length; i++) {
//         if(n[i] == 1) {
//             counter++
//         }
//     }
//     return counter
// }
