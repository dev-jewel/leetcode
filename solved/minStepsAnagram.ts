function minSteps(s: string, t: string): number {
  const letterCount: number[] = Array(26);

  for(let i = 0; i < s.length; i++) {
    if(!letterCount[s[i].charCodeAt(0) - 97]) {
      letterCount[s[i].charCodeAt(0) - 97] = 1;
    } else {
      letterCount[s[i].charCodeAt(0) - 97]++;
    }
  }

  for(let i = 0; i < t.length; i++) {
    if(letterCount[t[i].charCodeAt(0) - 97]) {
      letterCount[t[i].charCodeAt(0) - 97]--;
    }
  }
  
  return letterCount.reduce((prevSum, value) => prevSum + value, 0);
};


function minSteps2(s: string, t: string): number {
  let result: number = 0;
  const lettersS: Map<string, number> = new Map();

  for(let i = 0; i < s.length; i++) {
    if(!lettersS.has(s[i])) {
      lettersS.set(s[i], 1);
    } else {
      const letterCount = lettersS.get(s[i]);
      if(letterCount) {
        lettersS.set(s[i], letterCount + 1);
      }
    }
  }

  for(let i = 0; i < t.length; i++) {
    if(lettersS.has(t[i])) {
      const letterCount = lettersS.get(t[i]);
      if(letterCount === 1) lettersS.delete(t[i]);
      else if(letterCount) {
        lettersS.set(t[i], letterCount - 1);
      }
    }
  }

  lettersS.forEach(value => {
    result += value;
  })

  return result;
};


console.log(minSteps("bab", "aba"));
