function findWinners(matches: number[][]): number[][] {
  const onlyWinTeams: Set<number> = new Set();
  const oneLostTeams: Set<number> = new Set();

  const teams: Map<number, {[keys: string]: number}> = new Map();
  
  for(let i = 0; i < matches.length; i++) {
    if(onlyWinTeams.has(matches[i][1])) {
      onlyWinTeams.delete(matches[i][1]);
    } else {
      onlyWinTeams.add(matches[i][0]);
    }

    if(oneLostTeams.has(matches[i][1])) {
      oneLostTeams.delete(matches[i][1])
    } else {
      onlyWinTeams.add(matches[i][1]);
    }
  }

  return [[...onlyWinTeams], [...oneLostTeams]];
};

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]));
