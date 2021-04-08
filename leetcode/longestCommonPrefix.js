//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".
// Input: ["flower","flow","flight"]
// Output: "fl"
// Input: ["dog","racecar","car"]
// Output: ""

//this is simple
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

function longestCommonPrefix(strs) {
  let res = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return res;
    }
    res = res + strs[0][i];
  }
}

longestCommonPrefix(["flower", "flow", "flight"]);

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(
  array1.reduce((accumulator, currentValue) => accumulator + currentValue)
);
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
