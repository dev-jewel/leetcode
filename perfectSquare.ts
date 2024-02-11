function numSquares(n: number): number {
  let counter: number = 0;
  while(n > 1) {
    n = n - Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n));
    counter++;
  }
  return counter;
};

console.log(numSquares(15));
