class MyHashMap {
  private hashMap: {[keys: number]: number};
  constructor() {
    this.hashMap = {};
  }

  put(key: number, value: number): void {
    this.hashMap[key] = value;
  }

  get(key: number): number {
    if(key in this.hashMap) return this.hashMap[key];
    return -1;
  }

  remove(key: number): void {
    delete this.hashMap[key];
  }
}