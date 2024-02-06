function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
  const numsMap: Map<number, number> = new Map();

  for (let i = 0, length = nums.length; i < length; i++) {
    if (numsMap.has(nums[i])) {
      const index = numsMap.get(nums[i]);

      if (index !== undefined) {
        if(Math.abs(i - index) <= indexDiff ) return true;
      }
    }
    numsMap.set(nums[i], i);
  }
  return false;
};