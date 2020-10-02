//longest substring with k repeatative chars

function longSubStrKRepe(str, minRepeat) {
  let tempObj = {};
  let res = {};
  let ss = "";

  for (let i = 0; i < str.length; i++) {
    if (tempObj[str[i]]) {
      tempObj[str[i]] = tempObj[str[i]] + 1;
    } else {
      tempObj[str[i]] = 1;
    }
    ss = ss + str[i];
    res[ss] = ss.split("");
  }

  let oob = {};
  //   let anothre = {};
  let k = Object.keys(tempObj);
  for (let i = 0; i < k.length; i++) {
    oob[k[i]] = 0;
  }
  let tremp = "";
  let cache = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char) {
    }
  }
  console.log(oob);

  let s = "";
  for (let i = 0; i <= 0; i++) {
    s = s + str[i];
    for (let j = 1; j < str.length; j++) {
      s = s + str[j];

      console.log(s);
    }
  }
  console.log("eheheheh", s);
  console.log(tempObj);
  console.log(res);
}

var longestSubstring = function (s, k) {
  let map = new Map();
  map.clear();
  for (item of s) {
    if (map.has(item)) map.set(item, map.get(item) + 1);
    else map.set(item, 1);
  }
  console.log("1  **********", map);
  for ([item, val] of map) {
    console.log("2  **********", item, val);
    if (val < k) {
      let ar = s.split(item);
      console.log("3  **********", ar);
      let res = 0;
      for (word of ar) {
        console.log("recursive word", word);
        res = Math.max(res, longestSubstring(word, k));
        //Max(0,5)
        //res = 5
        //max(5,9)
        //9
      }
      return res;
    }
  }
  return s.length;
};

console.log("final value is", longestSubstring("ababbcddffgghggg", 2)); //ababb

// longest substring with atlesat k repeating (follow this one)
function longestSubString(str, k) {
  let letterCount = {};
  for (let i = 0; i < str.length; i++) {
    if (letterCount[str[i]]) {
      letterCount[str[i]] = letterCount[str[i]] + 1;
    } else {
      letterCount[str[i]] = 1;
    }
  }

  console.log(letterCount);
  let keys = Object.keys(letterCount);
  let values = Object.values(letterCount);

  for (let i = 0; i < keys.length; i++) {
    if (values[i] < k) {
      let maxLength = 0;
      let splitword = str.split(keys[i]);
      for (let j = 0; j < splitword.length; j++) {
        maxLength = Math.max(maxLength, longestSubString(splitword[j], k));
      }
      console.log("*****", maxLength);
      return maxLength;
    }
  }

  return str.length;
}
// longestSubString("bbaaacbd", 3);
