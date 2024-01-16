function equalFrequency(word: string): boolean {
  const letterCount: number[] = Array(26);

  for(let i = 0; i < word.length; i++) {
    if(letterCount[word[i].charCodeAt(0) - 97]) {
      letterCount[word[i].charCodeAt(0) - 97]++;
    } else {
      letterCount[word[i].charCodeAt(0) - 97] = 1;
    }
  }
  
  const store: Map<number, number> = new Map();

  for(let i = 0; i < 26; i++) {
    if(letterCount[i]) {
      if(!store.has(letterCount[i])) {
        store.set(letterCount[i], 1);
      } else {
        const value = store.get(letterCount[i]);
        if(value) {
          store.set(letterCount[i], value + 1);
        }
      }
    }
  }
  console.log(store);
  
  const stor = [...store.values()];
  const storValues = [...store.keys()];
  switch(store.size) {
    case 1: {
      if(store.has(1) || stor[0] === 1) return true;
      return false;
    }
    case 2: {
      
      if(
        store.get(1) === 1 ||
        Math.abs(storValues[0] - storValues[1]) === 1 && store.get(Math.max(...storValues)) === 1
        ) {
        return true;
      }
      return false;
    }
    default: return false;
  }

};

console.log(equalFrequency("aaaabbbbccc"));
