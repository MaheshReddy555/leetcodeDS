/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * 
 * Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
Example 1:

Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000. 


Example 2:

Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
*/

/**
 *
 *
 * to save original(left) bits USE &
 * 0  & 1 = 0
 * 1  & 1 = 1
 *
 *
 * to insert(right) whatever you want use |
 *
 * 0 | 1 = 1
 * 1 | 1 = 1
 */

//About bit manipulation
//https://www.youtube.com/watch?v=NLKQEOgBAnw&ab_channel=HackerRank

var reverseBits = function (n) {
  let out = [];
  for (let i = 0; i < 32; i++) {
    let s = n & 1;
    out.push(s);
    n >>= 1;
  }
  let res = 0;
  for (let i = 0; i < out.length; i++) {
    // console.log(i, out[i])
    res = res << 1;
    res = res | out[i];
  }

  //actually you have to return 'res', but in javascript I guess it is givnig base 10,
  //so convert number to bits(with base 2)
  //so use parseInt() with base 2 to convert bits to number(with base 2)
  let wow = (res >>> 0).toString(2);
  console.log("final ", wow.length);
  return parseInt(wow, 2);
};
