function minFallingPathSum(matrix: number[][]): number {
  let sum: number = 0;

  for(let i = 0; i < matrix.length - 1; i++) {
    for(let j = 1; j < matrix.length - 1; j++) {
      console.log(matrix[i][j], matrix[i + 1][j - 1], matrix[i + 1][j], matrix[i + 1][j + 1]);
      
      if(sum < matrix[i][j] + matrix[i + 1][j - 1] + matrix[i + 1][j] + matrix[i + 1][j + 1]) {
        sum = matrix[i][j] + matrix[i + 1][j - 1] + matrix[i + 1][j] + matrix[i + 1][j + 1];
      }
    }
  }
  return sum;
};

console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]));
