function alternateDigitSum(n: number): number {
  const strNum: string = n.toString();
  let sum: number = 0;
  for(let i = 0; i < strNum.length; i++) {
    sum += ((-1) ** i) * Number(strNum[i]);
  }
  return sum;
};