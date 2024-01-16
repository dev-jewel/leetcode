function minMovesToCaptureTheQueen(a: number, b: number, c: number, d: number, e: number, f: number): number {

  if(a === e) {
    if(c === e) {
      if(
        b < d && d < f ||
        b > d && d > f
      ) return 2;
    }
    return 1;
  }
  else if(b === f) {
    if(d === f) {
      if(
        a < c && c < e ||
        a > c && c > e
      ) return 2;
    }
    return 1;
  }
  else {
    if ( Math.abs(e - c) === Math.abs(f - d)) {
    
      if(
        Math.abs(a - c) === Math.abs(b - d) &&
        ((c < a && a < e) || (c > a && a > e))
      ) {
        return 2;
      }

      return 1;
    }
    return 2;
  }
};

console.log(minMovesToCaptureTheQueen(4, 3, 3, 4, 5, 2));
