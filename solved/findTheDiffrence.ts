function findTheDifference(s: string, t: string): string {
  const letters: number[] = new Array(26).fill(0);
  const l = t.length
  for(let i = 0; i < l; i++) {
    if(i === l - 1) {
      letters[t[i].charCodeAt(0) - 97]++;
    } else {
      letters[t[i].charCodeAt(0) - 97]++;
      letters[s[i].charCodeAt(0) - 97]--;
    }
  }
    
  return String.fromCharCode(letters.indexOf(1) + 97);
};


console.log(findTheDifference("abc", "abce"));
