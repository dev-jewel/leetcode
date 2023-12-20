function findMaxAverage(nums: number[], k: number): number {
  let summ: number = 0;
  
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] < nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }    
  }
  for(let i = 0; i < k; i++) {
    summ += nums[i];
  }
  
  return parseFloat((summ/k).toFixed(5));
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
