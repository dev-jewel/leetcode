function repeatedCharacter(s: string): string {
  const chars: number[] = Array(26).fill(0);
  for(let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt(0) - 97;
    if(chars[charCode] === 1) return s[i];
    chars[charCode]++;
  }
  return "";
};