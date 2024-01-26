function uniqueMorseRepresentations(words: string[]): number {
  const morseCode: string[] = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

  function decode(str: string): string {
    let decoded: string = "";
    for(let i = 0; i < str.length; i++) {
      decoded += morseCode[str[i].charCodeAt(0) - 97];
    }
    return decoded;
  }
  const decodeSet: Set<string> = new Set();

  for(let i = 0; i < words.length; i++) {
    decodeSet.add(decode(words[i]));
  }

  return decodeSet.size;
};

console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]));
