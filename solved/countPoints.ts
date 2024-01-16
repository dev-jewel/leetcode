function countPoints(points: number[][], queries: number[][]): number[] {
  const result: number[] = [];
  
  for(let i = 0; i < queries.length; i++) {
    let count = 0;
    
    for(let j = 0; j < points.length; j++) {
      if(
        Math.pow((points[j][0] - queries[i][0]), 2) + Math.pow((points[j][1] - queries[i][1]), 2) <= queries[i][2] * queries[i][2]
      ) count++;
    }
    result.push(count);
  }

  return result;
};


console.log(countPoints([[1,3],[3,3],[5,3],[2,2]], [[2,3,1],[4,3,1],[1,1,2]]));
