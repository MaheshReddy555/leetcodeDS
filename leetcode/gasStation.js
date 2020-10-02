/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 
 * There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

Note:

If there exists a solution, it is guaranteed to be unique.
Both input arrays are non-empty and have the same length.
Each element in the input arrays is a non-negative integer.

Example 1:

Input: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

Output: 3

Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
 */

//simple solution
var canCompleteCircuit1 = function (gas, cost) {
  let curTank = 0,
    totalTank = 0,
    pos = 0;
  for (let i = 0; i < gas.length; i++) {
    curTank += gas[i] - cost[i];
    console.log("curentTank", curTank);
    totalTank += gas[i] - cost[i];

    if (curTank < 0) {
      curTank = 0;
      pos = i + 1;
    }
  }

  return totalTank < 0 ? -1 : pos;
};
console.log(canCompleteCircuit1([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));

//more understanable solution ....
var canCompleteCircuit2 = function (gas, cost) {
  let curTank = 0,
    pos = 0;
  let totalGas = 0;
  let totalCost = 0;
  for (let i = 0; i < gas.length; i++) {
    curTank += gas[i] - cost[i];

    totalGas += gas[i];
    totalCost += cost[i];

    if (curTank < 0) {
      curTank = 0;
      pos = i + 1;
    }
  }

  return totalGas - totalCost < 0 ? -1 : pos;
};
// -2
//1,2,3,4,.........k,k+1,..........,n

// Input:                                     - 6
// toalGasAvailableInAllGasStations  = [1,2,3,4,5]
// totalCostToTravelAllStations =      [3,4,5,1,2]

//my solution
var canCompleteCircuit = function (gas, cost) {
  let totalGasInallSta = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGasInallSta += gas[i];
  }

  let totalGasForFullcircle = 0;
  for (let i = 0; i < cost.length; i++) {
    totalGasForFullcircle += cost[i];
  }
  console.log(totalGasInallSta, totalGasForFullcircle);

  if (totalGasInallSta < totalGasForFullcircle) return -1;

  //for input length is 1 and 1
  if (totalGasInallSta >= totalGasForFullcircle && gas.length === 1) return 0;

  let start = 0;
  let gasIntank = 0;
  let res = [];

  while (!res.includes(start)) {
    if (start > gas.length - 1) start = start - gas.length;
    gasIntank = gasIntank + gas[start];
    if (gasIntank >= cost[start]) {
      res.push(start);
      gasIntank = gasIntank - cost[start];
      start = start + 1;
    } else {
      console.log("before", res);
      start = start + 1;
      gasIntank = 0;
      res = [];
    }
  }

  console.log("final ans is", res);
  return res.length ? res[0] : -1;
};
// gas  = [1,2,3,4,5]
// cost = [3,4,5,1,2]
// canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
