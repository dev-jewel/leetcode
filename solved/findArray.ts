function findArray(pref: number[]): number[] {
  const result: number[] = [pref[0]];
  for(let i = 1; i < pref.length; i++) {
    result[i] = pref[i - 1] ^ pref[i];
  }
  return result;  
};

console.log(findArray([5,2,0,3,1]));

