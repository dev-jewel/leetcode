function isIsomorphic(s: string, t: string): boolean {
  
  if(s.length !== t.length) return false;
  
  const decodeMap: Map<string, string> = new Map();

  for(let i = 0; i < s.length; i++) {

    if(!decodeMap.has(s[i])) {
      decodeMap.set(s[i], t[i]);
    } else {      
      if(decodeMap.get(s[i]) !== t[i]) {
        return false;
      }
    }
  }
  console.log(decodeMap);
  
  return true;
};


console.log(isIsomorphic("badc", "baba"));
