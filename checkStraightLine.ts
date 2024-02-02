function checkStraightLine(coordinates: number[][]): boolean {
  const length: number = coordinates.length;
  if(coordinates.length <= 2) return true;

  if(
    coordinates.every(value => value[0] === coordinates[0][0]) ||
    coordinates.every(value => value[1] === coordinates[0][1])
  ) return true;

  const b: number = (coordinates[0][0] * coordinates[1][1] - coordinates[0][1] * coordinates[1][0]) / (coordinates[0][0] - coordinates[1][0]);
  const k: number = (coordinates[0][1] - coordinates[1][1]) / (coordinates[0][0] - coordinates[1][0]);

  for(let i = 2; i < length; i++) {
    if(k * coordinates[i][0] + b !== coordinates[i][1]) return false;
  }

  return true;
};


console.log(checkStraightLine([[0,0],[0,1],[0,-1]]));
