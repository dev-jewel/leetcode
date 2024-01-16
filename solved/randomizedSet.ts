class RandomizedSet {
  private storage: Set<number> = new Set();
  constructor() {
  }

  insert(val: number): boolean {
    if(this.storage.has(val)) return false;
    this.storage.add(val);
    return true;
  }

  remove(val: number): boolean {
    if(!this.storage.has(val)) return false;
    this.storage.delete(val);
    return true;
  }

  getRandom(): number {
    const values = [...this.storage];
    return values[Math.floor(Math.random() * 10000) % this.storage.size];
  }
}

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/

var objS = new RandomizedSet()
var param_1 = objS.insert(45)
var param_1 = objS.insert(16)
var param_1 = objS.insert(23)
var param_2 = objS.remove(1)
var param_3 = objS.getRandom()

console.log(objS.getRandom());
console.log(objS.getRandom());
console.log(objS.getRandom());
console.log(objS.getRandom());
console.log(objS.getRandom());
console.log(objS.getRandom());