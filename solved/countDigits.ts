function countDigits(num: number): number {
  let count: number = 0;
  for(let i = 0; i < `${num}`.length; i++) {
    console.log(`${num}`[i]);
    
    if(num % (+`${num}`[i]) === 0) count++;
  }
  return count;
};

console.log(countDigits(7));
