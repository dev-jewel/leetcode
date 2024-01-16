function sumOfMultiples(n: number): number {
  let sum: number = 0;
  for (let i = 3; i <= n; i++) {
    if (i % 3 === 0) sum += i;
    else if (i % 5 === 0) sum += i;
    else if (i % 7 === 0) sum += i;
  }
  return sum;
}

function sumOfMultiples2(n: number): number {
  return (
    (3 * Math.floor(n / 3) * (Math.floor(n / 3) + 1)) / 2 +
    (5 * Math.floor(n / 5) * (Math.floor(n / 5) + 1)) / 2 -
    (15 * Math.floor(n / 15) * (Math.floor(n / 15) + 1)) / 2 +
    (7 * Math.floor(n / 7) * (Math.floor(n / 7) + 1)) / 2 -
    (21 * Math.floor(n / 21) * (Math.floor(n / 21) + 1)) / 2 -
    (35 * Math.floor(n / 35) * (Math.floor(n / 35) + 1)) / 2 + 
    (105 * Math.floor(n / 105) * (Math.floor(n / 105) + 1)) / 2
  );
}



console.log(sumOfMultiples(1500));
console.log(sumOfMultiples2(1500));
