/**
 * Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 
 */

let str = ["h", "e", "l", "l", "o"];

function reverseString(str) {
  let n = str.length;
  let i = 0;
  let j = n - 1;

  while (i < j) {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    i++;
    j--;
  }

  return str;
}

let result = reverseString(str);
console.log(result);
