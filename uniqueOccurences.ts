function uniqueOccurrences(arr: number[]): boolean {

  const occuranceMap: Map<number, number> = new Map();
  
  for(const item of arr) {
    if(!(occuranceMap.has(item))) occuranceMap.set(item, 1);
    
    else {       
      let current_count = occuranceMap.get(item) || 1;     
      occuranceMap.set(item, current_count + 1);
    }
  }  
  return occuranceMap.size === new Set(occuranceMap.values()).size;
};

console.log(uniqueOccurrences([1,2,2,1,1,3, 3]));
