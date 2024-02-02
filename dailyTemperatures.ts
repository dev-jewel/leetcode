function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = [];
  let i: number = 0;
  let j: number = 0;
  let count: number = 0;
  while(i < temperatures.length) {
    console.log(i, j);
    
    if(j === temperatures.length - 1) {        
      count = 0;
      result[i] = count;
      j = ++i;
    }
    else if(temperatures[i] >= temperatures[j]) {
      count++;
      j++;
    } else {
      result[i] = count;
      j = ++i;
      count = 0;
    }
  }

  return result;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
console.log(dailyTemperatures([30,40,50,60]));
