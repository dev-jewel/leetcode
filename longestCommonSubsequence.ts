function longestCommonSubsequence(text1: string, text2: string): number {
  let count: number = 0;
  let currentIndex = -1;
  for(let i = 0; i < text1.length; i++) {
    for(let j = 0; j < text2.length; j++) {      
      if(j > currentIndex && text1[i] === text2[j]) {
        count++;
        
        currentIndex = j;
        console.log(currentIndex);
        continue;
      }
    }
  }

  let count2: number = 0;
  let currentIndex2 = -1;
  for(let i = 0; i < text2.length; i++) {
    for(let j = 0; j < text1.length; j++) {      
      if(j > currentIndex2 && text2[i] === text1[j]) {
        console.log(text1[j]);
        
        count2++;
        currentIndex2 = j;
        console.log(currentIndex2);
        
        continue;
      }
    }
  }
  console.log(count, count2);
  

  return count > count2 ? count : count2;
};

console.log(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy"));
