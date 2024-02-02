function totalMoney(n: number): number {
  const k: number = n % 7;
  const i: number = (n - k) / 7;
  return  28*i+3.5*i*(i-1)+k*i+0.5*k*(k+1); 
};