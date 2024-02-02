function sequentialDigits(low: number, high: number): number[] {
  const result: number[] = [];
  let lowLength: number  = `${low}`.length;
  let j: number = 1;
  const highTemp = high;
  if(high > 10**8) high = 10**8;
  
  while(true) {
    let numStr: string = "";
    for(let i = j; i <= 9; i++) {
      if(numStr.length < lowLength) {
        numStr += `${i}`;
      }      
      continue;
    }
    
    if(Number(numStr) > high) break;
    else if(Number(numStr) >= low) {
      result.push(Number(numStr));
    }
    
    if(j > 9 - lowLength) {
      lowLength++;
      j = 0;
    }
    j++;
  }
  if(highTemp > 10**8 && highTemp >= 123456789 && low <= 123456789) {
    result.push(123456789)
  }
  return result;
};

const timer = Date.now();

console.log(sequentialDigits(10, 10**9));

console.log(Date.now() - timer);

console.log(Number("1234567891"));


