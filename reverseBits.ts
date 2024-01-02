function reverseBits(n: number): number {
	const str = n.toString();
  let result: number = 0;

  for(let i = 0; i < str.length; i++) {
    result += +str[i] * (2 ** i);
  }

  return result;
};

console.log(reverseBits(00000010100101000001111010011100));
