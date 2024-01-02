function findMatrix(nums: number[]): number[][] {
  const result: number[][] = [];
  const countValueMap: Map<number, number> = new Map();

  for(let i = 0; i < nums.length; i++) {
    if(!countValueMap.has(nums[i])) {
      countValueMap.set(nums[i], 1);
    } else {
      const value = countValueMap.get(nums[i]);
      if(value) {
        countValueMap.set(nums[i], value + 1)
      }
    }
  }

  for(let i = 0; i < nums.length; i++) {
    const value = countValueMap.get(nums[i]);
    if(value && value > 0) {
      if(!result[value - 1]) {
        result[value - 1] = [];
      }
      result[value - 1].push(nums[i]);

      countValueMap.set(nums[i], value - 1);
    }
  }

  return result;
};


console.log(findMatrix([1,3,4,1,2,3,1]));
