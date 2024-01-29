function firstUniqChar(s: string): number {
  const chars: {[keys: string]: { count: number, index: number }} = {};
  for(let i = 0; i < s.length; i++) {
    if(s[i] in chars) {
      chars[s[i]] = { count: chars[s[i]].count + 1, index: i };
    } else {
      chars[s[i]] = { count: 1, index: i };
    }
  }

  for(const char in chars) {
    if(chars[char].count === 1) return chars[char].index;
  }
  return -1;
};