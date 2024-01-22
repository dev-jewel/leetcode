function arrayRankTransform(arr: number[]): number[] {
  const result: number[] = [];
  let count: number = 1;
  const temp: Map<number, number> = new Map();
  for(let i = 0; i < arr.length; i++) {
    temp.set(i, arr[i]);
  }

  while(temp.size) {
    let min;
    let minIndex: number[] = [];
    temp.forEach((value, key) => {
      if(!min) {
        min = value;
        minIndex.push(key);
      }
      else if(min === value) {
        minIndex.push(key);
      } else if(min > value) {
        minIndex.push(key);
        min = value;
      }
    })

    for(let i = 0; i < minIndex.length; i++) {
      result[minIndex[i]] = count;
      temp.delete(minIndex[i]);
    }
    count++;  
  }

  return result;
};


console.log(arrayRankTransform([1,100,100,10]));
