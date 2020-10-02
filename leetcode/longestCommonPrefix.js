//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".
// Input: ["flower","flow","flight"]
// Output: "fl"
// Input: ["dog","racecar","car"]
// Output: ""

function longestCommonPrefix(strs) {
  let res = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return r;
    }
    res = res + strs[0][i];
  }
}

longestCommonPrefix(["flower", "flow", "flight"]);
