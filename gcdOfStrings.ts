function gcdOfStrings(str1: string, str2: string): string {
  const mainMinLength = str1.length < str2.length ? str1.length : str2.length;
  let startSubString = "";
  let endSubString = "";
  let resultString = "";

  for(let i = 0; i < mainMinLength/2 + 1; i++) {
    if(str1[i] === str2[i]) {
      startSubString += str1[i];
    }
    if(str1[str1.length - i - 1] === str2[str2.length - i - 1]) {
      endSubString = str1[str1.length - 1 - i] + endSubString;
    }
  }

  console.log(startSubString, endSubString);
  

  const minLength = startSubString.length < endSubString.length ? startSubString.length : endSubString.length;
  for(let i = 0; i < minLength; i++) {
    if(startSubString[i] === endSubString[i]) {
      resultString += startSubString[i];
    }
    else return resultString;
  }

  return resultString;
};


console.log(gcdOfStrings("ABABAB", "ABAB"));
