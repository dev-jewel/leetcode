function findMaximumNumber(k: number, x: number): number {
  
  let i: number = 2 ** (x - 1);
  let sum: number = 0;
  while(true) {
    
    for(let j = x; j <= i.toString(2).length; j += x) {
      sum += +i.toString(2)[i.toString(2).length - j];
    }    
    if(sum >= k + 1) return --i;
    i++;
  }
};

console.log(findMaximumNumber(1024, 5));

let num = 64;
console.log(num.toString(2));
