function maxCoins(piles: number[]): number {
  let result: number = 0;
  const sortedArray: number[] = piles.sort((a, b) => a - b);  
  for(let i = sortedArray.length / 3; i < sortedArray.length; i += 2) {    
    result += piles[i];
  }

  return result;
};


console.log(maxCoins([9,8,7,6,5,1,2,3,4]));
