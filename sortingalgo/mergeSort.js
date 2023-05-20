var mertSort = (nums) => {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const start = nums.slice(0, mid);
  const end = nums.slice(mid);

  return merge(mertSort(start), mertSort(end));
};
function merge(start, end) {
  const answer = [];
  while (start.length && end.length) {
    if (start[0] <= end[0]) {
      answer.push(start.shift());
    } else {
      answer.push(end.shift());
    }
  }
  return [...answer, ...start, ...end];
}
console.log(mertSort([5, 1, 1, 2, 0, 0]));
