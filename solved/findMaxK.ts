function findMaxK(nums: number[]): number {
  let result: number = -1;
  const numSet: Set<number> = new Set();
  for(let i = 0; i < nums.length; i++) {
    numSet.add(nums[i]);
    if(numSet.has(-nums[i])) {
      if(result < Math.abs(nums[i])) {
        result = Math.abs(nums[i]);
      }
    }
  }
  return result;
};

console.log(findMaxK([-1,10,6,7,-7,1]));
