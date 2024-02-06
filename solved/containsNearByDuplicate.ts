function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const numsMap: Map<number, number> = new Map();

  for (let i = 0, length = nums.length; i < length; i++) {
    if (numsMap.has(nums[i])) {
      const index = numsMap.get(nums[i]);

      if (index !== undefined) {
        if(Math.abs(i - index) <= k) return true;
      }
    }
    numsMap.set(nums[i], i);
  }
  return false;
}

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
