function digitSum(s: string, k: number): string {
  const length: number = s.length;
  if(length <= k) return s;
  let str: string = "";
  let sum: number = 0;
  for(let i = 0; i < length; i++) {
    if(i > 0 && i % k === 0) {
      str += sum;
      sum = 0;
    }
    if(s[i]) sum += Number(s[i]);
  }
  str += sum;

  return digitSum(str, k); 
};

console.log(digitSum("1234", 3));
