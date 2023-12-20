function findMaxAverage(nums: number[], k: number): number {
  let max_sum: number | undefined;
  let sum: number = 0;
  let current_index: number = k - 1;
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (i === current_index) {
          if (!max_sum || max_sum < sum) max_sum = sum;
          current_index++;
          sum -= nums[current_index - k];
      }
  }
  if (!max_sum) return 0;

  return parseFloat((max_sum / k).toFixed(5));
};

console.log(findMaxAverage([1], 1));
