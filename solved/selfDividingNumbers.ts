function selfDividingNumbers(left: number, right: number): number[] {
  function isSelfDivide(num: number): boolean {
    const strNum: string = `${num}`;
    for(let i = 0; i < strNum.length; i++) {
      if(strNum[i] === "0" || num % +strNum[i] !== 0) return false;
    }
    return true;
  }
  const result: number[] = [];
  for(let i = left; i <= right; i++) {
    if(isSelfDivide(i)) result.push(i);
  }

  return result;
};