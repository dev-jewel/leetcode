function findMin(nums: number[]): number {
  const l = nums.length;
  if(l < 5) {
    return Math.min(...nums);
  } else {
    const isAsc: boolean = nums[0] < nums[1];

    let min: number = nums[0];
    for(let i = 1; i < l; i++) {
      if(isAsc && nums[i] < min) return nums[i];
      if(!isAsc && nums[i] > min) return nums[i - 1];
    }
    return min;
  }
  
};


