class MinStack {
  
  private storage: Array<{val: number, min: number}>;
  constructor() {
    this.storage = [];
  }

  push(val: number): void {
    if(this.storage.length === 0) {
      this.storage.push({val, min: val});
    } else {

      this.storage.push({ 
        val, 
        min: Math.min(val, this.storage[this.storage.length - 1].min)
      });
    }
  }

  pop(): void {
    this.storage.pop();
  }

  top(): number {
    return this.storage[this.storage.length - 1].val;
  }

  getMin(): number {
    return this.storage[this.storage.length - 1].min;
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/