function minOperations(nums: number[]): number {
  let result: number = 0;
  
  const counter: { [keys: number]: number } = {}

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] in counter) {
      counter[nums[i]] = counter[nums[i]] + 1;
    }
    else {
      counter[nums[i]] = 1;
    }
  }

  for(const key in counter) {
    if(counter[key] === 1) return -1;
    result += Math.floor((counter[key] - 1) / 3) + 1    
  }

  return result;
};


console.log(minOperations([2,3,3,2,2,4,2,3,4]));
