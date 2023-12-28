function buyChoco(prices: number[], money: number): number {
  let min = prices[0];
  let minIndex = 0;
  let secondMin;
  for(let i = 1; i < prices.length; i++) {
    if(min > prices[i]) {
      min = prices
      [i];
      minIndex = i;
    }
  }

  for(let i = 0; i < prices.length; i++) {
    if((!secondMin || secondMin > prices[i]) && minIndex !== i) {
      secondMin = prices[i];
    }
  }
  if(!secondMin) return money;
  return money - (min + secondMin) >= 0 ? money - (min + secondMin) : money;
};

console.log(buyChoco([2,2], 3));
