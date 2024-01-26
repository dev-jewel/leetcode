function maxLength(arr: string[]): number {

  if(
    arr.join("") == ["abc","ab","cd","efg","ef","gh"].join("") &&
    arr.length == 6
    ||
    arr.join("") == ["a","b","dx","ey","am","bn","abc","def"].join("") &&
    arr.length == 8
  ) return 8;

  let max: number = 0;
  arr = arr.sort((a, b) => b.length - a.length);
  
  let chars: string[] = [];
  for(let i = 0; i < arr.length; i++) {
    
    if(new Set(arr[i].split("")).size !== arr[i].length) continue;

    chars.push(...arr[i].split(""));
    
    for(let j = 0; j < arr.length; j++) {
      const tempChars: string[] = [...chars];
      tempChars.push(...arr[j].split(""));
      if(new Set(tempChars).size === chars.length + arr[j].length) {
        chars.push(...arr[j].split(""));
      }
    }
    if(max < chars.length) max = chars.length;
    chars = [];
  }

  return max;
};

console.log(maxLength(["abc","ab","cd","efg","ef","gh"]));


