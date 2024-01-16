function multiply(num1: string, num2: string): string {
  const length: number = num1.length > num2.length ? num1.length : num2.length;
  let result: string = "";
  let memorized: number = 0;
  for(let i = 0; i < length; i++) {
    console.log((memorized + +num1[num1.length - 1 - i] * +num2[num2.length - 1 - i]) % 10);
    
    result = (memorized + +num1[num1.length - 1 - i] * +num2[num2.length - 1 - i]) % 10 + result;
    memorized = ((memorized + +num1[num1.length - 1 - i] * +num2[num2.length - 1 - i]) - (memorized + +num1[num1.length - 1 - i] * +num2[num2.length - 1 - i]) % 10) / 10;
  }

  return result;
};

console.log(multiply("123", "456"));
