function getNoZeroIntegers(n: number): number[] {
  
  function hasZero(num: number) {
    while(num > 10) {
      if(num % 10 === 0) return true;
      else {
        num = Math.floor(num / 10);
      }
    }
    return false;
  }
  
  for(let i = 1; i <= n / 2; i++) {
    if(!hasZero(i) && !hasZero(n - i)) {
      return [i, n - i];
    }
  }
  
  return [];

};

console.log(getNoZeroIntegers(2));
