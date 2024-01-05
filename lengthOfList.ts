function lengthOfLIS(nums: number[]): number {
  let result: number = 0;
  
  for(let i = 0; i < nums.length; i++) {
    let counter = 1;
    for(let j = i; j < nums.length; j++) {
      if(nums[i] < nums[j]) counter++;
    }
    console.log(nums[i], counter);
    
    if(result < counter) result = counter; 
  }

  return result;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
