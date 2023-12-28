function largestAltitude(gain: number[]): number {
  const altitude: number[] = [0];
  let result: number = 0;

  for(let i = 0; i < gain.length; i++) {
    altitude[i + 1] = gain[i] + altitude[i];
    if(result < altitude[i + 1]) result = altitude[i + 1];
  }

  return result;
};

console.log(largestAltitude([-5,1,5,0,-7]));
