// Two Sum

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

// SOLUTION //
let nums = [2, 7, 11, 15];
let target = 9;

function twoSum(arr, target) {
  let n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
}

let result = twoSum(nums, target);
console.log(result);
