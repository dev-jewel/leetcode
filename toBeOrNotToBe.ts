type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  let value = val;    
  this.toBe = function(val) {
    if(val === value) return true;
    return new Error("Not Equal");
  }

  this.notToBe = function(val) {
    if(val !== value) return true;
    return new Error("Equal");
  }
  return this;	
};

console.log(expect(5).notToBe(null));

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */