function countEven(num: number): number {
  
  function sumDigits(n: number): number {
    let sum: number = 0;
    while(n > 0) {
      sum += n % 10;
      n = (n - n % 10) / 10;
    }
    return sum;
  }
  let count: number = 0;
  for(let i = 1; i <= num; i++) {
    if(sumDigits(i) % 2 === 0) {
      count++;
    }
  }
  return count;
};
