/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

function greaterThan10(n) { return n > 10; }

var filter = function(arr, fn) {
  const resultArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i], i)) resultArray.push(arr[i]);
  }

  return resultArray;
};