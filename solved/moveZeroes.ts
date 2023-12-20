/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    for(let i = 0; i < nums.length; i++) {
      
      if(nums[i] === 0) {
        for(let j = i + 1; j < nums.length; j++) {
          if(nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]            
            break;
          }
        }
      }
    }        
 };

 moveZeroes([0,0,1,0,0,2,0]);