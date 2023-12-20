class RecentCounter {
  private timeList: number[];
  constructor() {
      this.timeList = [];
  }

  ping(t: number): number {
    let count = 0;
    this.timeList.push(t);
    this.timeList.forEach(time => {
      if(time >= t - 3000 && time <= t) count++;
    })
    return count;
  }
}

/**
* Your RecentCounter object will be instantiated and called as such:
* var obj = new RecentCounter()
* var param_1 = obj.ping(t)
*/

const obj = new RecentCounter();
console.log(obj.ping(1));
console.log(obj.ping(100));
console.log(obj.ping(3001));
console.log(obj.ping(3002));
