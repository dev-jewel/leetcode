function halvesAreAlike(s: string): boolean {
  const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let counter = 0;
  for(let i = 0; i < s.length / 2; i++) {
    if(vowels.has(s[i])) counter++;
    if(vowels.has(s[s.length - 1 - i])) counter--;
  }

  return counter === 0;
};