function anagram(string1, string2) {
  let out = {};
  for (let i = 0; i < string1.length; i++) {
    if (out[string1[i]]) {
      out[string1[i]] = string1[i] + 1;
    } else {
      out[string1[i]] = 1;
    }
  }

  for (let i = 0; i < string2.length; i++) {
    if (out[string2[i]]) {
      out[string2[i]] = out[string2[i]] - 1;
    } else {
      return false;
    }
  }
  return true;
}

const groupAnagrams = (strs) => {
  const map = {};

  for (let str of strs) {
    const key = [...str].sort().join("");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
  }

  return Object.values(map);
};

function groupAnagram(arr) {
  let output = {};

  for (let i = 0; i < arr.length; i++) {
    let sortStr = [...arr[i]].sort().join("");

    if (!output[sortStr]) {
      output[sortStr] = [];
    }

    output[sortStr].push(arr[i]);
  }
  console.log(Object.values(output));
  return Object.values(output);
}

// groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]);

// longestSubStringWithout("bbbbb");
