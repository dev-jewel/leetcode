function addDigits(num: number): number {
  if(num < 10) return num;
  else {
    let sum: number = 0;
    while(num > 0) {
      sum += num % 10;
      num = (num - num % 10) / 10;
    }
    return addDigits(sum);
  }  
};

console.log(addDigits(658));
