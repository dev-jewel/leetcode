function increasingTriplet(nums: number[]): boolean {
  let the_value = nums[0];
  let count = 1;
  for(let i = 1; i < nums.length; i++) {
    console.log(count, " ", the_value, " ", i);
    
    if(the_value < nums[i]) {
      count++;
    }
    // else if(count > 2 && the_value >= nums[i]) {
    //   continue;
    // }
    else count = 1;
    the_value = nums[i];    
    if(count === 3) return true;
  }
  return false;
};

console.log(increasingTriplet([20,100,10,12,5,13]));
