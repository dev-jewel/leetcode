function countBits(n: number): number[] {
  function countOnes(number: number): number {
    let count = 0;
    while(number > 0) {
      if(number % 2 === 1) {
        count++;
        number = (number - 1) / 2;
      } else {
        number /= 2;
      }
    }
    return count;
  }

  const result: number[] = [];

  for(let i = 0; i <= n; i++) {
    result.push(countOnes(i));
  }
  
  return result;
};


console.log(countBits(5));
