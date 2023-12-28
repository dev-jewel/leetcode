/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  const result = {};
  for(let i = 0; i < this.length; i++) {
    if(!(fn(this[i]) in result)) {
      result[fn(this[i])] = [this[i]];
    } else {
      result[fn(this[i])].push(this[i]);
    }
  }
  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
const fn = function (item) { 
  return item.id; 
}
const array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
]
console.log(array.groupBy(fn));