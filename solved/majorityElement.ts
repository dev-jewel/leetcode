function majorityElement(nums: number[]): number {
  const numsMap: Map<number, number> = new Map();
  for(let i = 0; i < nums.length; i++) {
    if(!numsMap.has(nums[i])) {
      numsMap.set(nums[i], 1);
    } else {
      const value = numsMap.get(nums[i]);
      if(value) {
        numsMap.set(nums[i], value + 1)
      }
    }
  }

  let result = 0;
  numsMap.forEach((value, key) => {
    if(value > nums.length/2) result = key;
  })
  return result;
};

console.log(majorityElement([2,2,1,1,1,2,2]));
