let s = "the sky is blue";

// console.log(split);

function reverseWord(s) {
  let split = s.split(" ");
  let n = split.length;
  let res = [];

  for (let i = n - 1; i >= 0; i--) {
    if (split[i] !== "") {
      res.push(split[i]);
    }
  }

  return res.join(" ");
}

let result = reverseWord(s);
console.log(result);
