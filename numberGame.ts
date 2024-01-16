function numberGame(nums: number[]): number[] {
  const sorted = nums.sort((a, b) => a - b);
  const result: number[] = [];

  for(let i = 0; i < sorted.length - 1; i += 2) {
    result.push(sorted[i + 1], sorted[i])
  }

  return result;
};

console.log(numberGame([1,2,3,4,5,6]));
