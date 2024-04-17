var sortColors = function (nums) {
  let n = nums.length;
  let i = 0;
  let r = n - 1;
  let l = 0;

  while (i <= r) {
    if (nums[i] == 2) {
      let temp = arr[i];
      arr[i] = arr[r];
      arr[r] = temp;
      r--;
    } else if (nums[i] == 0) {
      let temp = arr[i];
      arr[i] = arr[l];
      arr[l] = temp;
      i++;
      l++;
    } else {
      i++;
    }
  }
  return nums;
};

let arr = [2, 0, 1];
let result = sortColors(arr);
console.log(result);
