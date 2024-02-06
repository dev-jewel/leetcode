class StockSpanner {
  private stocks: number[];
  constructor() {
    this.stocks = [];
  }

  next(price: number): number {
    this.stocks.push(price);
    let counter: number = 0;
    for(let i = this.stocks.length - 1; i >= 0; i--) {
      if(this.stocks[i] <= price) counter++; 
      else {
        return counter
      }
    }
    return counter;
  }
}