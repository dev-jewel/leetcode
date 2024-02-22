function findJudge(n: number, trust: number[][]): number {
  const trusting: number[] = new Array(n).fill(0);
  const people: number[] = new Array(n).fill(0);

  for(let i = 0, l = trust.length; i < l; i++) {
    trusting[trust[i][1] - 1]++;
    people[trust[i][0] - 1]++;
  }

  for(let i = 0; i < n; i++) {
    if(trusting[i] === n - 1 && people[i] === 0) return i + 1;
  }
  
  return -1;
};

console.log(findJudge(3, [[1,3],[2,3],[3,1]]));
