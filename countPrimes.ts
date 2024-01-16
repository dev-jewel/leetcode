function countPrimes(n: number): number {
  
  if(n < 2) return 0;
  let primesList: number[] = [2];
  for(let i = 2; i < n; i++) {
    if(i % 2 === 1) {
      primesList.push(i);
    }
  }

  for(let i = 2; i <= Math.sqrt(n); i++) {
    primesList = primesList.filter(item => item % i !== 0 || item === i);
  }
  console.log(primesList);
  
  return primesList.length;
};
let t = Date.now();

console.log(countPrimes(5000000));

console.log("time as milliseconds = ", Date.now() - t);
