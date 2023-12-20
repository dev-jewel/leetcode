function isSubsequence(s: string, t: string): boolean {
  
  if(s.length >= t.length) return s === t;
  if(s.length === 0) return true;

  let k: number = 0;
  for(let i = 0; i < s.length; i++) {
    
    let j: number = k;
    
    if(i < s.length && j >= t.length){
      return false;
    }

    while(j < t.length) {         
      if(s[i] === t[j]) {
        k = j + 1;
        break;
      } else j++;
      if(j === t.length) {
        return false;
      }
    }
  }
  return true;
};

console.log(isSubsequence("acb", "ahbgdc"));
