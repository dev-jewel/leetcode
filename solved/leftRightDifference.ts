function leftRightDifference(nums: number[]): number[] {
  const sum = nums.reduce((prevSum, value) => prevSum + value, 0);
  let sumLeft: number = 0;
  for(let i = 0; i < nums.length; i++) {
    sumLeft += nums[i];
    nums[i] = Math.abs(sum - 2 * sumLeft + nums[i]);
  }
  return nums;
};

console.log(leftRightDifference([10,4,8,3]));
