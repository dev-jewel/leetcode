function closeStrings(word1: string, word2: string): boolean {
  if(word1.length !== word2.length) return false;

  let letters: number[] = Array(26);

  for(let i = 0; i < word1.length; i++) {
    if(letters[word1[i].charCodeAt(0) - 97]) {
      letters[word1[i].charCodeAt(0) - 97]++;
    } else {
      letters[word1[i].charCodeAt(0) - 97] = 1;
    }

    if(letters[word2[i].charCodeAt(0) - 97]) {
      letters[word2[i].charCodeAt(0) - 97]--;
    } else {
      letters[word2[i].charCodeAt(0) - 97] = -1;
    }
  }
  letters = letters.filter(value => value);
  console.log(letters);
  
  const indexes: Set<number> = new Set();
  for(let i = 0; i < letters.length - 1; i++) {
    for(let j = i; i < letters.length; j++) {
      if(letters[i]) {
        if(-letters[i] === letters[j] && !indexes.has(j)) {
          indexes.add(j);
        } else return false;
      }
    }
  }

  return true;
};

console.log(closeStrings("cabbba",
"abbccc"));
