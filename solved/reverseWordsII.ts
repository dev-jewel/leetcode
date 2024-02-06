function reverseWords(s: string): string {
  function reverse(str: string): string {
    const strArr: string[] = str.split("");
    for(let i = 0, l = strArr.length; i < l/2; i++) {
      [strArr[i], strArr[l - 1 - i]] = [strArr[l - 1 - i], strArr[i]];
    }
    return strArr.join("");
  }

  const sArr: string[] = s.split(" ");
  for(let i = 0, l = sArr.length; i < l; i++) {
    sArr[i] = reverse(sArr[i])
  }
  return sArr.join("");
};