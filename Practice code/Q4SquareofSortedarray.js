/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 */

let nums = [-4, -1, 0, 3, 10];

function sortedSquares(nums) {
  let n = nums.length;
  let result = Array(n);
  let i = 0;
  let j = n - 1;
  for (let a = n - 1; a >= 0; a--) {
    if (nums[i] ** 2 < nums[j] ** 2) {
      result[a] = nums[j] ** 2;
      j--;
    } else {
      result[a] = nums[i] ** 2;
      i++;
    }
  }
  return result;
}

let sol = sortedSquares(nums);
console.log(sol);
