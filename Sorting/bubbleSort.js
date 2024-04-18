// let arr = [1, 2, 3, 5, 6, 7, 8, 9];
let arr = [9, 0, 1, 2, 5, 3, 7, 9, -5, -8, -10];

function bubbleSort(arr) {
  let n = arr.length;
  let is_swaped = false;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        is_swaped = true;
      }
    }
  }
  if (is_swaped === false) {
    return arr;
  }
  return arr;
}

let result = bubbleSort(arr);
console.log(result);
