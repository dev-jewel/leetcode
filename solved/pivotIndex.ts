function pivotIndex(nums: number[]): number {
  const summ: number = nums.reduce((sum, value) => value + sum, 0);
  
  let half_sum: number = 0;
  for(let i = 0; i < nums.length; i++) {    
    if((summ - nums[i])/2 === half_sum) return i;
    half_sum += nums[i];
  }
  return -1;
};