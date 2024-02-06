function maxSumAfterPartitioning(arr: number[], k: number): number {
  arr.sort((a:number, b: number) => b - a);
  const divident = (arr.length - arr.length % k) / k;
  const length = arr.length % k + divident;
  let resSum: number = 0;
  console.log(arr, divident, length);
  
  for(let i = 0; i < length; i++) {
    if(i < divident) {
      resSum += k * arr[i];
    } else {
      resSum += arr[i];
    }
  }
  return resSum;
};


console.log(maxSumAfterPartitioning([1,4,1,5,7,3,6,1,9,9,3], 4));

