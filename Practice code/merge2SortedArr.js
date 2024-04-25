let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

function mergeSort(nums1, nums2, m, n) {
  let result = Array(m + n);
  let i = 0,
    j = 0,
    k = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result[k] = nums1[i];
      i++;
      k++;
    } else {
      result[k] = nums2[j];
      j++;
      k++;
    }
  }

  while (i < m) {
    result[k] = nums1[i];
    i++;
    k++;
  }

  while (j < n) {
    result[k] = nums2[j];
    k++;
    j++;
  }

  k = 0;

  while (k < m + n) {
    nums1[k] = result[k];
    k++;
  }
}

mergeSort(nums1, nums2, m, n);

console.log(nums1);
