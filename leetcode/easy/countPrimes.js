/**
 * @param {number} n
 * @return {number}
 * 
 * Count the number of prime numbers less than a non-negative number, n.

Example:
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

https://www.youtube.com/watch?v=PypkiVlTRa4
 */
var countPrimes = function (n) {
  let primes = Array.from({ length: n }, () => true);

  for (let i = 2; i < primes.length; i++) {
    if (primes[i]) {
      for (let j = i; i * j < primes.length; j++) {
        primes[i * j] = false;
      }
    }
  }
  let count = 0;
  for (let i = 2; i < primes.length; i++) {
    if (primes[i]) count++;
  }
  return count;
};

//another method( diff is in first loop condition)
var countPrimes = function (n) {
  let primes = Array.from({ length: n }, () => true);

  for (let i = 2; i * i < primes.length; i++) {
    if (primes[i]) {
      for (let j = i; i * j < primes.length; j++) {
        primes[i * j] = false;
      }
    }
  }
  let count = 0;
  for (let i = 2; i < primes.length; i++) {
    if (primes[i]) count++;
  }
  return count;
};
