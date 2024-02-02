function getLucky(s: string, k: number): number {
  let sum: number = 0;
  for(let i = 0; i < s.length; i++) {
    const asciCode: number = s[i].charCodeAt(0) - 96;
    
    if(asciCode < 10) sum += asciCode;
    else sum += asciCode % 10 + (asciCode - asciCode % 10) / 10;
  }
  if(k === 1) return sum;
  
  for(let i = 0; i < k - 1; i++) {
    if(sum < 10) return sum;
    let num: number = sum;
    sum = 0;
    while(num > 0) {
      sum += num % 10;
      num = (num - num % 10) / 10;      
    }
  }
  return sum;
};