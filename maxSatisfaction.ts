function maxSatisfaction(satisfaction: number[]): number {
  const sorted: number[] = satisfaction.sort((a,b) => a - b);
  let result: number = 0;
  let time = 1;
  for(let i = 0; i < sorted.length; i++) {
    
    if(sorted[i] >= -1) {
      result += time++ * sorted[i];
    }
  }
  if(result < 0) return 0;

  return result;
};


console.log(maxSatisfaction([4,3,2]));
