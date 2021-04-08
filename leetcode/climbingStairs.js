/**
 * @param {number} n
 * @return {number}
 * 
 * You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

https://www.youtube.com/watch?v=UyDyc6yV1iQ
 */

//using memoizaion like dynamic programming
var climbStairs = function (n) {
  function countingFunc(stairsRemaining, savedResults) {
    if (stairsRemaining < 0) return 0;
    if (stairsRemaining === 0) return 1;
    if (savedResults[stairsRemaining]) return savedResults[stairsRemaining];
    savedResults[stairsRemaining] =
      countingFunc(stairsRemaining - 1, savedResults) +
      countingFunc(stairsRemaining - 2, savedResults);
    return savedResults[stairsRemaining];
  }

  return countingFunc(n, {});
};

/*
                                        3
                                      /   \
                                (1 used)   (2 used)
                                   2        1
                                /    \      /  \
                          (1 ud)   (2 ud) (1 ud) (2 ud) 
                              1       0     0      -1
                            /   \
                      (1 ud)   (2 ud) 
                         0        -1  
                         
                         
 */
