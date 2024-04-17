let arr = [9, 0, 1, 2, 5, 3, 7, 9, -5, -8, -10];

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min_Idx = findMinEle(arr, i);

    if (min_Idx !== i) {
      let temp = arr[i];
      arr[i] = arr[min_Idx];
      arr[min_Idx] = temp;
    }
  }
}

function findMinEle(arr, i) {
  let minIdx = i;

  for (let j = i; j < arr.length; j++) {
    if (arr[j] < arr[minIdx]) {
      minIdx = j;
    }
  }
  return minIdx;
}

selectionSort(arr);

console.log(arr);
