/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  console.log("string is", s);
  if (s.length & 1) return false;
  let stack = [];
  let dict = {
    ")": "(",

    "]": "[",

    "}": "{",
  };

  for (let char of s) {
    console.log(
      "stack is",
      stack,
      stack.length,
      stack[stack.length - 1],
      dict[char]
    );
    if (stack.length >= 1 && stack[stack.length - 1] === dict[char]) {
      stack.length--;
    } else {
      console.log("********");
      stack.push(char);
    }
  }
  return stack.length === 0;
};

// isValid("(]");
console.log(isValid("([)]"));
