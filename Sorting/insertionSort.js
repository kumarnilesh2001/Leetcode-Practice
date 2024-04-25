let arr = [5, 4, 3, 2, 1];

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let ele = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > ele) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = ele;
  }
  return arr;
}

let result = insertionSort(arr);
console.log(result);
