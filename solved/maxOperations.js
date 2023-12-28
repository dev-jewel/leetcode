/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  let result = 0;

  const numsMap = new Map();

  for(let i = 0; i < nums.length; i++) {
    
    if(!numsMap.has(nums[i])) {
      numsMap.set(nums[i], 1);
    } else {
      numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
    }
  }

  for(let i = 0; i < nums.length; i++) {
    
    if(
      nums[i] === k - nums[i] &&
      numsMap.get(nums[i]) >= 2
      ) {
      numsMap.set(nums[i], numsMap.get(nums[i]) - 2);
      result++;
    }

    if(
      nums[i] !== k - nums[i] &&
      numsMap.get(nums[i]) >= 1 &&
      numsMap.get(k - nums[i]) >= 1
    ) {
      numsMap.set(nums[i], numsMap.get(nums[i]) - 1);
      numsMap.set(k - nums[i], numsMap.get(k - nums[i]) - 1);
      result++;
    }
  }
  return result;
};



console.log(maxOperations([1,3,3,5,6, 3], 6));
