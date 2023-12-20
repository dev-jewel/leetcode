function productExceptSelf(nums: number[]): number[] {
  let zeroCount = 0;
  let zeroIndex = 0
  let multiply = 1;
  const resultsArray: number[] = [];
  for(let i = 0; i < nums.length; i++) {
    resultsArray.push(0);
    if(nums[i] === 0) {
      zeroCount++;
      zeroIndex = i;
      continue;
    }
    multiply *= nums[i];
  }

  switch(zeroCount) {
    case 0: {
      for(let i = 0; i < nums.length; i++) {
        resultsArray[i] = multiply/nums[i];
      }
      break;
    }
    case 1: {
      resultsArray[zeroIndex] = multiply;
      break;
    }
  }
  return resultsArray;
};

console.log(productExceptSelf([1,2,3,4]));
