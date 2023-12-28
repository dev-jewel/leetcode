/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  if(obj.length !== 0 || !obj.length) {
    return Object.keys(obj).length === 0;
  } else {
    return obj.length === 0;
  }
};

const arr = "[1,2,3,4]";

console.log(isEmpty({"length": 0}));