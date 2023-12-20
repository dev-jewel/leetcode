function mergeAlternately(word1: string, word2: string): string {
  const maxLength: number = word1.length > word2.length ? word1.length : word2.length;
  let str: string = "";
  for(let i = 0; i < maxLength; i++) {
    if(word1[i]) str += word1[i];
    if(word2[i]) str += word2[i];
  }
  return str;
};

console.log(mergeAlternately("ab", "pqrc"));
