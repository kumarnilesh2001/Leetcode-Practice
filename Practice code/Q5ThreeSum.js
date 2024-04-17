/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 
 */

let nums = [-1, 0, 1, 2, -1, -4];
// let nums = [0, 0, 0, 0];

function threeSum(nums) {
  let n = nums.length;
  nums = nums.sort((a, b) => a - b);
  let res = [];
  let i, j;
  for (let k = 0; k < n - 2; k++) {
    if (k > 0 && nums[k] === nums[k - 1]) continue;

    i = k + 1;
    j = n - 1;

    while (i < j) {
      let sum = nums[k] + nums[i] + nums[j];
      if (sum === 0) {
        res.push([nums[k], nums[i], nums[j]]);
        i++;
        while (nums[i] === nums[i - 1]) i++;
      } else if (sum < 0) {
        i++;
      } else {
        j--;
      }
    }
  }
  return res;
}

let result = threeSum(nums);
console.log(result);
