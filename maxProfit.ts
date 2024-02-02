function maxProfit(prices: number[]): number {
  let result: number = 0;
  const length = prices.length;
  for(let i = 0; i < length - 1; i++) {
    for(let j = i + 1; j < length; j++) {
      if(prices[j] - prices[i] > result) {
        result = prices[j] - prices[i];
      }
    }
  }
  return result;
};

console.log(maxProfit([7,6,4,3,1]));
