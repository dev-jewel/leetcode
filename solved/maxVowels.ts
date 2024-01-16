function maxVowels(s: string, k: number): number {
  
  let max: number = 0;
  const vowels: Set<string> = new Set(['a', 'e', 'i', 'u', 'o']);
  let counter: number = 0;
  const storage: number[] = [];  
  for(let i = 0; i < s.length; i++) {
    if(vowels.has(s[i])) {
      counter++;
    }
    if(i < s.length - k - 1) {
      storage.push(counter);
    }

    if(i === k - 1) {
      max = counter;      
    }
    if(i > k && counter - storage[i - k] > max ) { 
      max = counter - storage[i - k - 1];
    } 
  }
  
  return max > k ? k : max;
};

// console.log(maxVowels("ramadan", 2));
// console.log(maxVowels("ibpbhixfiouhdljnjfflpapptrxgcomvnb", 33));
console.log(maxVowels("uaiptsvkdadtefchtnftwjepohdfvgn", 24));

