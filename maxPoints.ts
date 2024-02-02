function maxPoints(points: number[][]): number {
  const length: number = points.length;

  switch(length) {
    case 1: return 1;
    case 2: return 2;
    default: {
      let max = 0;
      // find all k and b for y = kx + b function
      const kbSet: Set<string> = new Set();

      for(let i = 0; i < length - 1; i++) {
        let counter: number = 1;
        for(let j = i + 1; j < length; j++) {
          if(points[i][0] !== points[j][0]) {
            const k = (points[i][1] - points[j][1])/(points[i][0] - points[j][0]);
            const b = (points[i][1] * points[j][0] - points[j][1] * points[i][0])/(points[j][0] - points[i][0]);            
            kbSet.add(`${k} ${b}`);
          } else {
            counter++;
          }            
        }
        if(max < counter) {
          max = counter;
        }
      }

      kbSet.forEach(val => {
        let counter = 0;
        for(let i = 0; i < length; i++) {
          if(Number(val.split(" ")[0]) * points[i][0] + Number(val.split(" ")[1]) === points[i][1]) {
            counter++;
          }
        }
        
        if(max < counter) {
          max = counter;
        }
      });
      
      return max;
    }
  }
  
};

const arg = [[-184,-551],[-105,-467],[-90,-394],[-60,-248],[115,359],[138,429],[60,336],[150,774],[207,639],[-150,-686],[-135,-613],[92,289],[23,79],[135,701],[0,9],[-230,-691],[-115,-341],[-161,-481],[230,709],[-30,-102]];
// const arg = [[54,153],[1,3],[0,-72],[-3,3],[12,-22],[-60,-322],[0,-5],[-5,1],[5,5],[36,78],[3,-4],[5,0],[0,4],[-30,-197],[-5,0],[60,178],[0,0],[30,53],[24,28],[4,5],[2,-2],[-18,-147],[-24,-172],[-36,-222],[-42,-247],[2,3],[-12,-122],[-54,-297],[6,-47],[-5,3],[-48,-272],[-4,-2],[3,-2],[0,2],[48,128],[4,3],[2,4]];
console.log(maxPoints(arg));