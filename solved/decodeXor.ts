function decode(encoded: number[], first: number): number[] {
  const decoded: number[] = [first];
  for(let i = 0; i < encoded.length; i++) {
    decoded[i + 1] = decoded[i] ^ encoded[i];
  }
  return decoded;
};

console.log(decode([1,2,3], 1));
