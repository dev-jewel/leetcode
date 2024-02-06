function digitCount(num: string): boolean {
  const nums: number[] = Array(10).fill(0);
  for(let i = 0; i < num.length; i++) {
    nums[+num[i]]++;
  }
  console.log(nums);
  
  for(let i = 0; i < num.length; i++) {
    if(nums[i] !== +num[i]) return false;
  }

  return true;
};

console.log(digitCount("1210"));
;