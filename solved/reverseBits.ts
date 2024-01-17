function reverseBits(n: number): number {
	const str = n.toString(2); 
  let result: number = 0;

  for(let i = 0; i < 32; i++) {
    if(i >= 32 - str.length) {
      result += +str[i + str.length - 32] * (2 ** i);
    }
  }

  return result;
};

console.log(reverseBits(0b00000010100101000001111010011100));
