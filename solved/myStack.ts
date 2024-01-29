class MyStack {
  private storage: number[];
  constructor() {
    this.storage = [];
  }

  push(x: number): void {
    this.storage.push(x);
  }

  pop(): number {
    const value = this.storage.pop();
    if(value) return value;
    return -1;
  }

  top(): number {
    return this.storage[this.storage.length - 1];
  }

  empty(): boolean {
    return this.storage.length === 0;
  }
}

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/