function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  
  switch(flowerbed.length) {
    case 0: {
      return n < 1;
    }

    case 1: {
      if(flowerbed[0] === 0) return n <= 1;
      else return n < 1;
    }
    case 2: {
      if(flowerbed[0] === 0 && flowerbed[1] === 0) return n <= 1;
      else return n < 1;
    }
    default: {
      
      let i: number = 0;
      
      if(flowerbed[0] === 0 && flowerbed[1] === 0) {
        n--;
        i +=1;
      }
    
      if(flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
        n--;
      }
    
      while(i < flowerbed.length - 3) {
      
        if(flowerbed[i] === 0 && flowerbed[i + 1] === 0 && flowerbed[i + 2] === 0) {
          n--;
          i += 2;
        }else i++;
      }
      
      return n <= 0;
    }
  }
  
};

console.log(canPlaceFlowers([0,0,0], 2));
