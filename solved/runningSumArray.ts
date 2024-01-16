function runningSum(nums: number[]): number[] {
  const result: number[] = [];

  for(let i = 0; i < nums.length; i++) {
    if(result[i - 1]) {
      result[i] = result[i - 1] + nums[i];
    }
    else {
      result[i] = nums[i];
    }
  }

  return result;
};

console.log(runningSum([1,2,3,4,5]));
