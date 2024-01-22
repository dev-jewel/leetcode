function removeDuplicates(nums: number[]): number {
  const numsMap: Map<number, number> = new Map();
  for(let i = 0; i < nums.length; i++) {
    if(!numsMap.has(nums[i])) {
      numsMap.set(nums[i], 1);
    } else {
      numsMap.set(nums[i], 2);
    }
  }
  let sum: number = 0;
  let index: number = 0;
  numsMap.forEach((value, key) => {
    sum += value;
    if(value === 1) {
      nums[index] = key;
      index++;
    } else {
      nums[index] = key;
      nums[++index] = key;
      index++;
    }
  });
  
  return sum;
};

console.log(removeDuplicates([0,0,1,1,1,2,3,3,4]));
