/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
  arr.sort((a, b) => fn(a) - fn(b))
  return arr;
};
const arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
console.log(sortBy(arr, fn));