function sumIndicesWithKSetBits(nums: number[], k: number): number {
  function isBitsEqualK(num: number): boolean {
    const binaryStr: string = num.toString(2);    
    let counter: number = 0;
    for(let i = 0; i < binaryStr.length; i++) {
      if(binaryStr[i] === "1") {
        counter++;
      }
      if(counter > k) return false;
    }
    return counter === k;
  }

  let sum: number = 0;

  for(let i = 0; i < nums.length; i++) {
    if(isBitsEqualK(i)) {      
      sum += nums[i];
    }
  }
  return sum;
};

console.log(sumIndicesWithKSetBits([5,10,1,5,2], 1));
