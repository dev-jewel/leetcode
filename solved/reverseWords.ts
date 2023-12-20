function reverseWords(s: string): string {
  let resultString = "";
  let word = "";
  for(let i = s.length - 1; i >= 0; i--) {

    if(s[i] !== " ") {
      word = s[i] + word;
    } 
    if(s[i] === " " || i === 0) {
      
      if(resultString.length === 0) {
        resultString += word;
      }      
      else if(word.length > 0) {
        resultString += " " + word;
      }
      word = "";
    }
  }    
  return resultString;
};

console.log(reverseWords(" hello world"));
