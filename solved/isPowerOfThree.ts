function isPowerOfThree(n: number): boolean {
  if(n <= 0) return false;
  else if(n > 0 && n < 1) n = n ** -1;

  while(n > 1) {
    if(n % 3 !== 0) return false;
    n /= 3;
  }
  return true;
};

console.log(isPowerOfThree(1/9));
