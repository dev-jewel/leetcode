function maxScore(s: string): number {
  let all_one_count: number = 0;
  let zero_count: number = 0;
  let one_count: number = 0;
  let score = 0;

  for(let i = 0; i < s.length; i++) {
    if(s[i] === "1") all_one_count++;
  }  

  if(all_one_count === s.length || all_one_count === 0) return s.length - 1;

  for(let i = 0; i < s.length; i++) {
    if(s[i] === "0") zero_count++;
    else one_count++;

    if(i === s.length - 1 && s[s.length - 1] === "0") zero_count--;

    if(score < zero_count + all_one_count - one_count) {
      score = zero_count + all_one_count - one_count;
    }    
  }

  return score;
};

console.log(maxScore("01001"));
