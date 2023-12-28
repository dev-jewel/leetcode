function strStr(haystack: string, needle: string): number {
  if(haystack.length < needle.length) return -1;
  let count = 0;
  for(let i = 0; i < haystack.length; i++) {
    console.log(haystack[i], needle[i - count], i, count);
    
    if(haystack[i] !== needle[i - count]) {
      count = i + 1;
      continue;
    }
    if(i - count === needle.length - 1) {
      return i - needle.length + 1;
    }    
  }

  return -1;
};


console.log(strStr("mississippi", "issip"));
