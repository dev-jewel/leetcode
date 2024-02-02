function canJump(nums: number[]): boolean {
  let index: number = 1;
  while(index < nums.length) {
    if(nums[index] === 0) return false;
    index += nums[index];
  }
  return true;
};