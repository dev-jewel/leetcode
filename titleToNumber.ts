function titleToNumber(columnTitle: string): number {
  let sum: number = 0;
  for(let i = 0; i < columnTitle.length; i++) {
    sum += 26 * i + (columnTitle[columnTitle.length - 1 - i].charCodeAt(0) - 64)
  }
  return sum;
};
console.log("Y".charCodeAt(0) - 64);

console.log(titleToNumber("AB"));