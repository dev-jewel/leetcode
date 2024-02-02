function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  const wordStr1: string = word1.reduce((lastText, word) => lastText + word);
  const wordStr2: string = word2.reduce((lastText, word) => lastText + word);
  return wordStr1 === wordStr2;
};

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
// for(let i = 0; i < wordStr1.length; i++) {
//   letterCount[wordStr1[i].charCodeAt(0) - 97]++;
//   letterCount[wordStr2[i].charCodeAt(0) - 97]--;
// }
// letterCount.reduce((prevSum, val) => prevSum + val, 0) === 0;