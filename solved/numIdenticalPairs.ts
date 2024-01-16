function numIdenticalPairs(nums: number[]): number {
  const counterMap: Map<number, number> = new Map();
  let result: number = 0;
  
  for(let i = 0; i < nums.length; i++) {
    if(!counterMap.has(nums[i])) counterMap.set(nums[i], 1);
    else {
      const value = counterMap.get(nums[i]);
      if(value) {
        counterMap.set(nums[i], value + 1);
      }
    }
  }

  counterMap.forEach((value) => {
    result += value * (value - 1) / 2;
  });

  return result;
};