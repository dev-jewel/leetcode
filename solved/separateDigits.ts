function separateDigits(nums: number[]): number[] {
  
  function sepDigits(n: number): number[] {
    if(n < 10) return [n];
    let digits: number[] = [];
    while(n > 0) {
      digits.unshift(n % 10);
      n = (n - n % 10) / 10;
    }
    return digits;
  }
  const result: number[] = [];
  for(let i = 0; i < nums.length; i++) {

    result.push(...sepDigits(nums[i]));
  }
  return result;
};

console.log(separateDigits([13,25,83,77]));
