function groupAnagrams(strs: string[]): string[][] {
  
  function isTwoAnagram(w1: string, w2: string): boolean {
    const letters: number[] = new Array(26).fill(0);
    for(let i = 0, l = w1.length; i < l; i++) {
      letters[w1[i].charCodeAt(0) - 97]++;
      letters[w2[i].charCodeAt(0) - 97]--;
    }
    return letters.every((val) => val === 0);
  }

  const length = strs.length;
  
  if(length === 0) return [];
  else if(length === 1) return [strs];

  const result: string[][] = [];
  const wordIndex: Set<number> = new Set();

  for(let i = 0; i < length; i++) {
    const tempWords: string[] = [];
    if(!wordIndex.has(i)) {
      tempWords.push(strs[i]);
      for(let j = i + 1; j < length; j++) {
        if(strs[i].length == strs[j].length && !wordIndex.has(j)) {
          if(isTwoAnagram(strs[i], strs[j])) {
            tempWords.push(strs[j]);
            wordIndex.add(j);
          }
        }
      }
    }
    if(tempWords.length > 0) {
      result.push(tempWords);
    }
    
  }
  return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams(["abs","abs", "abs", ""]));
// console.log(groupAnagrams(["a"]));
