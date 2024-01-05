function smallerNumbersThanCurrent(nums: number[]): number[] {
  const result: number[] = [];
  
  for(let i = 0; i < nums.length; i++) {
    let counter = 0;
    for(let j = 0; j < nums.length; j++) {
      if(nums[i] > nums[j]) counter++;
    }
    result.push(counter);
  }

  return result;
};


console.log(smallerNumbersThanCurrent([8,1,2,52,6,5]));
