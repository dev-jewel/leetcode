function checkPerfectNumber(num: number): boolean {
  if(num === 1) return false;
  let sumDivisors: number = 1;
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) sumDivisors += (i + num / i);
  }
  return sumDivisors === num;
};