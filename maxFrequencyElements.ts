function maxFrequencyElements(nums: number[]): number {
  
  let maxCount = 1;
  let max = 0;
  const numsCount: Map<number, number> = new Map();

  for(let i = 0; i < nums.length; i++) {
    if(!numsCount.has(nums[i])) {
      numsCount.set(nums[i], 1);
    } else {
      const numCount = numsCount.get(nums[i]);
      if(numCount) {
        numsCount.set(nums[i], numCount + 1);
      }
    }
  }

  numsCount.forEach((value) => {
    if(value > max) {
      max = value;
      maxCount = 1;
    } else if(value === max) {
      maxCount++;
    }
  });

  return maxCount * max;
};