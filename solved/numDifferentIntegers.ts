function numDifferentIntegers(word: string): number {
  const nums: Set<string> = new Set();

  let str:string = "";
  for(let i = 0; i <= word.length; i++) {
    if(str && isNaN(+word[i])) {
      nums.add(str);
      str = "";
    }
    else if(!isNaN(+word[i])) {
      if(str === "0") {
        str = word[i];
      } else {
        str += word[i];
      }
    }
  }
  
  return nums.size;
};


console.log(numDifferentIntegers("01a001v1"));
