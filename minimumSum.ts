function minimumSum(num: number): number {
  const nums: number[] = [+`${num}`[0], +`${num}`[1], +`${num}`[2], +`${num}`[3]];
  nums.sort();
  return (nums[0] + nums[1]) * 10 + nums[2] + nums[3];
};