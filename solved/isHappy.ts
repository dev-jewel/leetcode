function isHappy(n: number): boolean {
  const nums: Set<number> = new Set([n]);
  while(true) {
    console.log(n);
    
    if(n === 1) return true;
    n = `${n}`.split("").reduce((sum, value) => sum + +value * +value, 0);
    if(nums.has(n)) return false;
    nums.add(n);
  }
};

console.log(isHappy(1));
