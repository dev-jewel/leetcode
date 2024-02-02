function divideArray(nums: number[], k: number): number[][] {
  const result: number[][] = [];
  const n = nums.length;
  nums.sort((a, b) => a - b);
  
  for(let i = 0; i < n; i += 3) {
    if(nums[i + 2] - nums[i] > k) return [];
    result.push([nums[i], nums[i + 1], nums[i + 2]]);
  }
  
  return result;
};

console.log(divideArray([33,26,4,18,16,24,24,15,8,18,34,20,24,16,3], 16));
