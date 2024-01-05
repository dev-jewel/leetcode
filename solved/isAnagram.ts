function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) return false;
  const letterMap: Map<string, number> = new Map();
  for(let i = 0; i < s.length; i++) {
    if(!letterMap.has(s[i])) letterMap.set(s[i], 1);
    else {
      const currentLetterCount = letterMap.get(s[i]);
      if(currentLetterCount) {
        letterMap.set(s[i], currentLetterCount + 1)
      }
    }
  }

  console.log(letterMap);
  

  for(let i = 0; i < t.length; i++) {
    
    if(!letterMap.has(t[i])) return false;
    const currentLetterCount = letterMap.get(t[i]);    
    if(currentLetterCount) {
      letterMap.set(s[i], currentLetterCount - 1)
    }
  }

  console.log(letterMap);
  

  for(let i = 0; i < letterMap.size; i++) {
    if([...letterMap.values()][i] !== 0) return false;
  }

  return true;
};

console.log(isAnagram("aacc", "cacc"));
