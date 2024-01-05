function getConcatenation(nums: number[]): number[] {
  const length = nums.length;
  for(let i = 0; i < length; i++) {
    nums[i + length] = nums[i];
  }

  return nums;
};


console.log(getConcatenation([1,2,3,4]));
