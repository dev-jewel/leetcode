function tribonacci(n: number): number {

  let t: number[] = [0, 1, 1];

  switch (n) {
    case 0: return 0;
    case 1: return 1;
    case 2: return 1;
    default: {
      for(let i = 3; i <= n; i++) {
        [t[0], t[1], t[2]] = [t[1], t[2], t[0] + t[1] + t[2]];
      }
      return t[2];
    }
  }
};