function minOperations(s: string): number {
  let operationCount: number = 0;
  let operationCount2: number = 0;
  for(let i = 0; i < s.length; i++) {
    if(i%2 === 0) {
      if(s[i] === "1") {
        operationCount++;
      } else operationCount2++;
    } else {
      if(s[i] === "0") {
        operationCount++;
      } else operationCount2++;
    }
  }
  return operationCount < operationCount2 ? operationCount : operationCount2;
};

console.log(minOperations("1111"));
