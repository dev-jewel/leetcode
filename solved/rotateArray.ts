/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
  
  const temp: number[] = [...nums];
  for(let i = 0; i < nums.length; i++) {
    nums[( i + k) % nums.length] = temp[i]
  }
  console.log(nums);
  
 };

 rotate([1,2,3,4,5,6,7], 1)