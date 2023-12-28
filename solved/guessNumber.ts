/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


 function guessNumber(n: number): number {
  let min: number = 1;
  let max: number = n;
  
  while(guess(Number((min + max)/2)) !== 0) {
    if(guess(Number((min + max)/2)) === -1) {
      max = Number((min + max)/2);
    } else if(guess(Number((min + max)/2)) === 1) {
      min = Number((min + max)/2);
    } else return Number((min + max)/2);
  }
  return Number((min + max)/2);   
 };