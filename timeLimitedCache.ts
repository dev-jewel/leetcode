class TimeLimitedCache {
  private cache: Map<number, number>;
  private cls;
  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    let result = true;
    
    clearTimeout(this.cls);
    
    this.cls = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    if (!this.cache.has(key)) {
      result = false;
    }

    this.cache.set(key, value);

    return result;
  }

  get(key: number): number {
    const cached = this.cache.get(key);

    if (cached) {
      return cached;
    }
    return -1;
  }

  count(): number {
    return this.cache.size;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

const timeLimitedCache = new TimeLimitedCache();

console.log(timeLimitedCache.set(1, 42, 50));
console.log(timeLimitedCache.set(1, 50, 100));
console.log(timeLimitedCache.get(1));
console.log(timeLimitedCache.get(1));
console.log(timeLimitedCache.get(1));
console.log(timeLimitedCache.count());
