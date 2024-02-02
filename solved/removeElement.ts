function removeElement(nums: number[], val: number): number {
  let counter: number = 0;
  let i: number = 0;
  let j: number = 0;
  let length: number = nums.length;
  while(i + j !== length) {
    if(nums[i] === val) {
      if(nums[length - 1 - j] !== val) {
        counter++;
        [nums[i], nums[length - 1 - j]] = [nums[length - 1 - j], nums[i]];
        i++;
        j++;
      } else j++
    } else {
      i++;
      counter++;
    };
  }
  
  return counter;
};



console.log(removeElement([3,2,2,3], 2));
