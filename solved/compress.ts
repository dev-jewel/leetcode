function compress(chars: string[]): number {
  let str = "";
  let result = "";
  let charsCountList: number[] = [];

  for(let i = 0; i < chars.length; i++) {
    if(chars[i] !== str[str.length - 1]) {
      str += chars[i];
      charsCountList.push(1);
    }
    else {
      charsCountList[str.length - 1]++;
    }
  }

  for(let i = 0; i < str.length; i++) {
    if(charsCountList[i] === 1) {
      result += str[i];
    }
    else {
      result += str[i] + charsCountList[i];
    }
  }

  for(let i = 0; i < result.length; i++) {
    chars[i] = result[i];
  }

  return result.length;
};

console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b", "a", "a"]));
