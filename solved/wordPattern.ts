function wordPattern(pattern: string, s: string): boolean {
  const wordArray = s.split(" ");
  if(pattern.length !== wordArray.length) return false;
  const wordMap: Map<string, string> = new Map();

  for(let i = 0; i < pattern.length; i++) {    
    if(!wordMap.has(pattern[i])) {

      if([...wordMap.values()].includes(wordArray[i])) {
        return false;
      }
      wordMap.set(pattern[i], wordArray[i]);
    } else {
      if(wordMap.get(pattern[i]) !== wordArray[i]) return false;
    }
  }

  return true;
};

console.log(wordPattern("abba", "fish fish fish fish"));
