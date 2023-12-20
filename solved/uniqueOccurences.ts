function uniqueOccurrences(arr: number[]): boolean {
  const occuranceObj: { [key: number]: number} = {};
  for(const item of arr) {
    if(!(item in occuranceObj)) occuranceObj[item] = 1;
    else occuranceObj[item]++;
  }
  const values: number[] = [];
  for(const occurance in occuranceObj) {
    values.push(occuranceObj[occurance]);
  }
  for(let i = 0; i < values.length; i++) {
    for(let j = i + 1; j < values.length; j++) {
      if(values[i] === values[j]) return false;
    }
  }
  
  return true;
};

console.log(uniqueOccurrences([1,2,2,3,4,3,1,2,1]));
