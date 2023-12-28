/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

function plusone(n) { return n + 1; }

var map = function(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i]);
  }
  return arr;
};

console.log(map([1,2,3,4], plusone));