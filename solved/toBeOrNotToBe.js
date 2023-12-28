/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  this.value = val;    
  this.toBe = function(val) {
    if(val === this.value) return true;
    throw new Error("Not Equal");
  }

  this.notToBe = function(val) {
    if(val !== this.value) return true;
    throw new Error("Equal");
  }
  return this;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(null));