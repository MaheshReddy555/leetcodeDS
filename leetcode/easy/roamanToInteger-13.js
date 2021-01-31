/**
 * @param {string} s
 * @return {number}
 */

//My solution
var romanToInt = function (s) {
  var values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  function add(start = 0) {
    if (start > s.length - 1) return total;
    if (start === s.length - 1) {
      total = total + values[s[start]];
      return total;
    }
    if (values[s[start]] >= values[s[start + 1]]) {
      total = total + values[s[start]];
      start++;
    } else {
      total = total + values[s[start + 1]] - values[s[start]];
      start = start + 2;
    }
    add(start);
  }
  add();
  return total;
};

//Internet solution looks nice
let romanToInt = function (s) {
  let romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let currentInt = romanToInt[s.charAt(i)];
    let nextInt = romanToInt[s.charAt(i + 1)];

    if (nextInt) {
      if (currentInt >= nextInt) {
        total += currentInt;
      } else {
        total += nextInt - currentInt;
        i++;
      }
    } else {
      total += currentInt;
    }
  }

  return total;
};
