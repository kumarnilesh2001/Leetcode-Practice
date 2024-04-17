let nums = [1, 0, -1, 0, -2, 2];
// let nums = [1, 0, -1, 0, -2, 2];
let target = 0;

function fourSum(nums, target) {
  // nums.sort((a, b) => a - b);
  // const quadruplets = [];
  // const n = nums.length;
  // for (let i = 0; i < n - 3; i++) {
  //   if (i > 0 && nums[i] === nums[i - 1]) {
  //     continue;
  //   }
  //   for (let j = i + 1; j < n - 2; j++) {
  //     if (j > i + 1 && nums[j] === nums[j - 1]) {
  //       continue;
  //     }
  //     let left = j + 1;
  //     let right = n - 1;
  //     while (left < right) {
  //       const sum =
  //         BigInt(nums[i]) +
  //         BigInt(nums[j]) +
  //         BigInt(nums[left]) +
  //         BigInt(nums[right]);
  //       if (sum < target) {
  //         left++;
  //       } else if (sum > target) {
  //         right--;
  //       } else {
  //         quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
  //         while (left < right && nums[left] === nums[left + 1]) {
  //           left++;
  //         }
  //         while (left < right && nums[right] === nums[right - 1]) {
  //           right--;
  //         }
  //         left++;
  //         right--;
  //       }
  //     }
  //   }
  // }
  // return quadruplets;

  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = [];

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        }
      }
    }
  }
  return res;
}

let result = fourSum(nums, target);
console.log(result);
