// let arr = [9, 0, 1, 2, 5, 3, 7, 9, -5, -8, -10];

// function selectionSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let min_Idx = findMinEle(arr, i);

//     if (min_Idx !== i) {
//       let temp = arr[i];
//       arr[i] = arr[min_Idx];
//       arr[min_Idx] = temp;
//     }
//   }
// }

// function findMinEle(arr, i) {
//   let minIdx = i;

//   for (let j = i; j < arr.length; j++) {
//     if (arr[j] < arr[minIdx]) {
//       minIdx = j;
//     }
//   }
//   return minIdx;
// }

// selectionSort(arr);

// console.log(arr);

let arr = [5, 4, 3, 2, 1];

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min_idx = findingMinIdx(arr, i);
    if (min_idx !== i) {
      let temp = arr[i];
      arr[i] = arr[min_idx];
      arr[min_idx] = temp;
    }
  }

  return arr;
}

function findingMinIdx(arr, i) {
  let min_idx_ele = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min_idx_ele]) {
      min_idx_ele = j;
    }
  }
  return min_idx_ele;
}

let result = selectionSort(arr);
console.log(result);
