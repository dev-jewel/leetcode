class MyHashSet {
  private hashSet: Set<number>;
  constructor() {
    this.hashSet = new Set();
  }

  add(key: number): void {
    this.hashSet.add(key);
  }

  remove(key: number): void {
    this.hashSet.delete(key);
  }

  contains(key: number): boolean {
    return this.hashSet.has(key);
  }
}