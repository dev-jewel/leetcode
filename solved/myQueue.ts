class MyQueue {
  private storage: number[];
  constructor() {
    this.storage = [];
  }

  push(x: number): void {
    this.storage.push(x);
  }

  pop(): number {
    const value = this.storage.shift();
    if(!value) {
      return -1;
    }
    return value;
  }

  peek(): number {
    return this.storage[0];
  }

  empty(): boolean {
    return this.storage.length === 0; 
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/

const myObj = new MyQueue();

console.log(myObj.push(1));
console.log(myObj.push(2));
console.log(myObj.peek());
console.log(myObj.pop());
console.log(myObj.empty());
