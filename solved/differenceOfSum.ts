function differenceOfSum(nums: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 9) {
      switch (`${nums[i]}`.length) {
        case 2:
          sum += 9 * +`${nums[i]}`[0];
          break;
        case 3:
          sum += 99 * +`${nums[i]}`[0] + 9 * +`${nums[i]}`[1];
          break;
        default:
          sum +=
            999 * +`${nums[i]}`[0] +
            99 * +`${nums[i]}`[1] +
            9 * +`${nums[i]}`[2];
          break;
      }
    }
  }
  return sum;
}