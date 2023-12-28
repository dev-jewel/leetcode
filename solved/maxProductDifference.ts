function maxProductDifference(nums: number[]): number {
  let max1 = nums[0];
  let max2;
  let min1 = nums[0];
  let min2;
  let maxIndex = 0, minIndex = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > max1) {
      max1 = nums[i];
      maxIndex = i;
    }
    if(nums[i] < min1) {
      min1 = nums[i];
      minIndex = i;
    }
  }

  for(let i = 0; i < nums.length; i++) {
    if((!max2 || nums[i] > max2) && i !== maxIndex) {
      max2 = nums[i];
    }
    if((!min2 || nums[i] < min2) && i !== minIndex) {
      min2 = nums[i];
    }
  }
  
  if(!max2 || !min2) return 0;
  return(max1 * max2 - min1 * min2);
};

console.log(maxProductDifference([1,6,7,5,2,4,10,6,4]));
