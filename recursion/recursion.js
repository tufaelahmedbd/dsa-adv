// 1.

// function countDecrease(n) {
//   // for (let i = n; i > 0; i--) {
//   //   console.log(i);
//   // }
//   console.log(n);
//   if (n > 0) {
//     countDecrease(n - 1);
//   }
// }
// countDecrease(10);

// 2.a

// function sumOfAllNum(n) {
//   count = 0;
//   for (let i = n; i > 0; i--) {
//     count += i;
//   }
//   return count;
// }
// console.log(sumOfAllNum(10));

//2.b

// function sumOfAllNumber(n) {
//   if (n < 0) return 0;
//   return n + sumOfAllNumber(n - 1);
// }
// console.log(sumOfAllNumber(10));

//3.a

function sumOfArr(arr) {
  if (arr.length === 0) return 0;
  let rest = arr.slice(1);

  return arr[0] + sumOfArr(rest);
}

// Time = big O(n^2)
//space = big O(n)

//3.b

function sumOfArray(arr) {
  return helperSum(arr, 0);
}
function helperSum(arr, index) {
  if (arr.length === index) return 0;

  return arr[index] + helperSum(arr, index + 1);
}
//time =big O(n)
//space =big O(n)

let input1 = new Array(5000).fill(1);
let input2 = new Array(5000).fill(1);

let now = Date.now();
console.log(sumOfArr(input1));
let after = Date.now();
console.log(`slow fun time needed ${after - now} ms`);

let start = Date.now();
console.log(sumOfArray(input2));
let end = Date.now();
console.log(`fast fun time needed ${end - start} ms`);
