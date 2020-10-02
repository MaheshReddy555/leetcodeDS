/**
 * @param {number[]} nums
 * @return {number}
 *
 * Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.
 */
var findDuplicate = function (nums) {
  let obj = {};
  for (item of nums) {
    if (obj[item]) obj[item] = obj[item] + 1;
    else obj[item] = 1;
  }

  let values = Object.values(obj);
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    if (values[i] > 1) {
      return keys[i];
    }
  }
};
