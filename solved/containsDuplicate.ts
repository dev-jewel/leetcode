function containsDuplicate(nums: number[]): boolean {
  const numSet: Set<number> = new Set();

  for(let i = 0, length = nums.length; i < length; i++) {
    if(numSet.has(nums[i])) return true;
    numSet.add(nums[i]);
  }
  return false;
};