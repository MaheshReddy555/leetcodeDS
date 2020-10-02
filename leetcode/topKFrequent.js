/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Given a non-empty array of integers, return the k most frequent elements.
 * 
 * Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.
 */
var topKFrequent = function (nums, k) {
  let output = [];
  let obj = {};
  for (item of nums) {
    if (obj[item]) obj[item] = obj[item] + 1;
    else obj[item] = 1;
  }

  for (let i = 0; i < k; i++) {
    let max_freq = 0;
    let max_key = 0;
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    for (let j = 0; j < keys.length; j++) {
      if (values[j] > max_freq) {
        max_freq = values[j];
        max_key = keys[j];
      }
    }
    output.push(max_key);
    delete obj[max_key];
  }

  console.log(output);
  return output;
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
