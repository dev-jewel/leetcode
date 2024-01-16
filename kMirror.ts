function kMirror(k: number, n: number): number {
  
  let result: number = 0;

  function kNumericSystemIsMirror(num: number, k: number): boolean {
    let result: string = "";
    let reverse: string = "";
    while(num > 0) {
      reverse = num % k + reverse;
      result += num % k;
      num = (num - num % k) / k;
    }
    return result === reverse;
  }

  function isMirror(str: string): boolean {    
    for(let i = 0; i < str.length/2; i++) {
      if(str[i] !== str[str.length - i - 1]) {
        return false;
      }
    }
    return true;
  }

  let count: number = 0;
  let i: number = 0;
  while(count < n) {
    i++;
    if(i % k === 0) continue;
    if(isMirror(`${i}`)) {
      if (kNumericSystemIsMirror(i, k)) {
        result += i;
        count++;
      }
    }
  }

  return result;
};
const time = Date.now();
console.log(kMirror(7, 20));
console.log(time - Date.now());

let number = 151;

console.log(number.toString(3));

// if(isMirror(`${i}`)) {
//   const number = i.toString(k);
//   if(kNumericSystemIsMirror(i, k)) {        
//     result += i;
//     count++;
//   }
// }