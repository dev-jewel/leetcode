function reverseVowels(s: string): string {
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  const stringArray = s.split("");
  const indexes: number[] = [];
  stringArray.forEach((char, index) => {
    if(vowels.includes(char)) indexes.push(index);
  });
  
  if(indexes.length < 2) return s;

  for(let i = 0; i < (indexes.length)/2; i++) {
    const temp = stringArray[indexes[i]];
    stringArray[indexes[i]] = stringArray[indexes[indexes.length - 1 - i]];
    stringArray[indexes[indexes.length - 1 - i]] = temp;
  }
  return stringArray.join("");
};

console.log(reverseVowels("alternative"));
