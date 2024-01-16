function nthUglyNumber(n: number): number {
  let counter: number = 0;
  let i: number = 0;

  function isUglyNum(num: number): boolean {
    while(num > 1) {
      if(num % 2 === 0) {
        num /= 2;
  
      } else if(num % 3 === 0) {
        num /= 3;
      }
      else if(num % 5 === 0) {
        num /= 5;
      } else return false;  
    }
    return true;
  }
  
  while(true) {
    i++;
    if(
      i === 1 ||
      i % 2 === 0 ||
      i % 3 === 0 ||
      i % 5 === 0
      ) {
      console.log(i);
      if(isUglyNum(i)) {
        counter++;
      }
      if(counter === n) return i;

    } else {
      i;
    }
  }
};


console.log("res, ", nthUglyNumber(100));
