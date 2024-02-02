function countLargestGroup(n: number): number {
  function sumDigits(n: number): number {
    let sum: number = 0;
    while(n > 0) {
      sum += n % 10;
      n = (n - n % 10) / 10;
    }
    return sum;
  }

  const countDigitSum: {[keys: number]: number} = {};

  for(let i = 1; i <= n; i++) {
    const sum: number = sumDigits(i);
    if(sum in countDigitSum) {
      countDigitSum[sum]++;
    } else {
      countDigitSum[sum] = 1;
    }
  }

  let max: number = 0;
  for(const sums in countDigitSum) {
    if(countDigitSum[sums] > max) {
      max = countDigitSum[sums];
    }
  }
  let count: number = 0;
  for(const sums in countDigitSum) {
    if(countDigitSum[sums] === max) {
      count++;
    }
  }

  return count;
};