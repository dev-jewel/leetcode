function removeStars(s: string): string {
  let resultStr: string = "";
  let starCount = 0;
  for(let i = s.length - 1; i >= 0; i--) {
    if(s[i] === "*") {
      starCount++;
    } else {
      if(starCount > 0) {
        starCount--;
      } else {
        resultStr = s[i] + resultStr;
      }
    }
  }

  return resultStr; 
};

console.log(removeStars("leet**cod*e"));
