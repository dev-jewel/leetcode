function removeDuplicatesI(nums: number[]): number {
  const numSet: Set<number> = new Set(nums);

  for(let i = 0; i < numSet.size; i++) {
    nums[i] = [...numSet][i];
  }
  
  return numSet.size;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
