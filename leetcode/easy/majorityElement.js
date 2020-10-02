/**
 * @param {number[]} nums
 * @return {number}

 Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
Input: [3,2,3]
Output: 3

Example 2:
Input: [2,2,1,1,1,2,2]
Output: 2
 */
var majorityElement = function(nums) {
    let countObj = {}
    for(let i=0; i< nums.length;i++){
        if(countObj[nums[i]]) countObj[nums[i]] += 1;
        else countObj[nums[i]] = 1
    }
    let max = 0;
    let out;
    for(const key in countObj){
        max = Math.max(max, countObj[key])
        if(max === countObj[key]) out = key
        
    }
    return out
};

//n/2 is key which is in problem description
var majorityElement = function(nums) {
    let sortedArr = nums.sort((a,b)=>a-b)

    return sortedArr[Math.floor(nums.length/2)]
};


// 5, 7, 1,2,3,7,9,8,7,2

// 1,2,2,3,5,7,7,7,8,9,9,9,9,9,9


var majorityElement = function(nums) {
    let out = {max:0,maxKey:0};
    let countObj = {};
    for(let i=0; i< nums.length;i++){
        if(countObj[nums[i]]) countObj[nums[i]] += 1;
        else countObj[nums[i]] = 1
        
        let val = Math.max(out.max, countObj[nums[i]])
        if(val === countObj[nums[i]]) key = nums[i]
        out = {max: val,maxKey:key}
    }
   
    return out.maxKey
};