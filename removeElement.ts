function removeElement(nums: number[], val: number): number {
  let counter: number = 0;
  nums.forEach((num, index) => {
    if(num === val) {
      counter++;
      nums[index] = null;
      for(let j = index; j < nums.length - 1; j++) {
        let temp = nums[j];
        nums[j] = nums[j+1]
        nums[j+1] = temp;
      }
      console.log("index =", index);
      console.log("nums =", nums);
      
    }
  })
  console.log(nums);  
  return counter;
};



console.log(removeElement([0,1,2,2,3,0,4,2], 2));
