function findErrorNums(nums: number[]): number[] {
  const result: number[] = [];
  const count: number[] = [];
  for(let i = 0; i < nums.length; i++) {nums
    if(count[nums[i] - 1]) {
      count[nums[i] - 1]++;
    } else {
      count[nums[i] - 1] = 1;
    }
  }

  for(let i = 0; i < nums.length; i++) {
    if(!count[i]) {
      result.push(i + 1);
    }
  }
  
  for(let i = 0; i < count.length; i++) {
    
    if(count[i] === 2 && result.length === 0) {
      result.push(i + 1, i + 2)
    }
    else if(count[i] === 2 && result.length > 0) {
      result.unshift(i + 1);
    } 
  }
  console.log(count);
  
  return result; 
};


console.log(findErrorNums([1,5,3,2,2,7,6,4,8,9]));
