/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  const result = []
  for(let i = 0; i < arr.length; i++) {
    
    if(result.length > 0 && result[result.length - 1].length < size) {
      result[result.length - 1].push(arr[i]);
    } else {
      result[result.length] = [];
      result[result.length - 1].push(arr[i]);
    }
  }
  return result;
};


console.log(chunk([1,2,3,4,5,6,7], 4))