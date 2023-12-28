function canConstruct(ransomNote: string, magazine: string): boolean {
  const charCountMap: Map<string, number> = new Map();
  for(let i = 0; i < magazine.length; i++) {
    if(!charCountMap.has(magazine[i])) {
      charCountMap.set(magazine[i], 1);
    } else {
      const value = charCountMap.get(magazine[i]);
      if(value) charCountMap.set(magazine[i], value + 1);
    }
  }
  
  for(let i = 0; i < ransomNote.length; i++) {
    const value = charCountMap.get(ransomNote[i]);
    if(!value || value < 1) return false;
    charCountMap.set(ransomNote[i], value - 1); 
  }
  return true;
};