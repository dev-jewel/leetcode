/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
  const cacheMap = new Map();
  return function (...args) {
    if (!cacheMap.has(JSON.stringify(args))) {
      cacheMap.set(JSON.stringify(args), fn(...args));
    }
    return cacheMap.get(JSON.stringify(args));
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1