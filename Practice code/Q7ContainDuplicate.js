let nums = [2, 14, 18, 22];

var containsDuplicate = function (nums) {
  mp = {};
  for (let i = 0; i < nums.length; i++) {
    if (mp[nums[i]]) {
      mp[nums[i]] += 1;
    } else {
      mp[nums[i]] = 1;
    }
  }

  let arr = Object.values(mp);

  for (let obj of arr) {
    if (obj > 1) return true;
  }
  return false;
};

let result = containsDuplicate(nums);
console.log(result);
