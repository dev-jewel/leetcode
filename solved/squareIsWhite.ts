function squareIsWhite(coordinates: string): boolean {
  const chessLetter: {[keys: string]: number} = {
    "a": 0,
    "b": 1,
    "c": 0,
    "d": 1,
    "e": 0,
    "f": 1,
    "g": 0,
    "h": 1,
  };

  return +coordinates[1] % 2 === chessLetter[coordinates[0]];
};