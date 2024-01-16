function longestSubarray(nums: number[]): number {
  let oneCount: number = 0;
  let zeroCount: number = 0;
  let result: number = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      zeroCount++;
    } else {
      if(zeroCount > 1) {
        oneCount = 0;
        zeroCount = 0;
      }
      oneCount++
    }
    if(oneCount > result) result = oneCount;
  }

  return result;
};

console.log(longestSubarray([0,1,1,1,0,1,1,0,1]));
