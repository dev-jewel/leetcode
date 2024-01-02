function maxPoints(points: number[][]): number {
 
  switch(points.length) {
    case 1: return 1;
    case 2: return 2;
    default: {
      let max = 0;    
      for(let i = 0; i < points.length - 1; i++) {
        let counter = 0;
        if(points[i][0] === points[i + 1][0]) {
          for(let j = 0; j < points.length; j++) {
            if(points[i][0] === points[j][0]) {
              counter++;
            }
          }
        } else {
          let k: number | null = null, b: number | null = null;
          for(let j = i; j < points.length - 1; j++) {
            
            if(points[i][0] === points[j][0]) {
              
            }
            
            
            console.log(k, b);

            
            if(k === null && b === null) {
              k = (points[i][1] - points[j][1])/(points[i][0] - points[j][0]);
              b = (points[i][1] * points[j][0] - points[j][1] * points[i][0])/(points[j][0] - points[i][0]);
              counter += 2;
            } else {
              if(k && b && points[j][1] === k * points[j][0] + b) {
                counter++;
              }
            }
          }
        }
        if(counter > max) max = counter;
      }

      return max;
    }
  }
  
};


console.log(maxPoints([[3,3],[1,4],[1,1],[2,1],[2,2]]));
