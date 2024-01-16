function areaOfMaxDiagonal(dimensions: number[][]): number {
  let max: number = 0;
  let result = 0;
  for(let i = 0; i < dimensions.length; i++) {

    if(max < Math.sqrt(dimensions[i][0] * dimensions[i][0] + dimensions[i][1] * dimensions[i][1])) {
      max = Math.sqrt(dimensions[i][0] * dimensions[i][0] + dimensions[i][1] * dimensions[i][1]);
      result = dimensions[i][0] * dimensions[i][1];
    } else if(max === Math.sqrt(dimensions[i][0] * dimensions[i][0] + dimensions[i][1] * dimensions[i][1]) && result < dimensions[i][0] * dimensions[i][1]) {
      result = dimensions[i][0] * dimensions[i][1];
    }
  }
  return result;
};

console.log(areaOfMaxDiagonal([[9,3],[8,6]]));
