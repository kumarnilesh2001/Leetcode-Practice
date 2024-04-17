let nums = [0, 1, 0, 3, 12];

function moveZeros(nums) {
  let n = nums.length;
  let i = 0;
  let j = i + 1;

  while (j <= n - 1) {
    if (nums[i] !== 0) {
      i++;
      j++;
    } else {
      if (nums[j] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
      j++;
    }
  }
  return nums;
}

let result = moveZeros(nums);
console.log(result);
