function findOddNumber(arr) {
  let oddArr = [];

  function helper(input) {
    if (input.length === 0) return;

    if (input[0] % 2 !== 0) {
      oddArr.push(input[0]);
    }

    helper(input.slice(1));
  }

  helper(arr);

  return oddArr;
}

console.log(findOddNumber([1, 2, 3, 4, 5, 6, 7, 13, 9, 8, 10]));
