function minimizedStringLength(s: string): number {
  let resultString: string = "";
  for(let i = 0; i < s.length; i++) {
    if(!resultString.includes(s[i])) {
      resultString = s[i] + resultString;
    }
  }
  
  return resultString.length;
};

console.log(minimizedStringLength("aaccssdfs"));
