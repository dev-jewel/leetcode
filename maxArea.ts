// function maxArea(height: number[]): number {
//   let area: number = 0;

//   for(let i = 0; i < height.length - 1; i++) {
//     for(let j = height.length; j > i; j--) {
//       if(height[i] > height[j] && area < (j - i) * height[j]) {
//         area = (j - i) * height[j];
//       }
//       else if(height[i] <= height[j] && area < (j - i) * height[i]) {
//         area = (j - i) * height[i];
//       }
//     }
//   }

//   return area;
// };


function maxArea(height: number[]): number {
  let leftSide: number = height[0];
  let leftIndex: number = 0, rightIndex: number = height.length - 1;
  let rightSide: number = height[height.length - 1];
  let area: number = 0;
  
  for(let i = 0; i < height.length/2 + 1; i++) {
    
    if(leftSide < height[i]) {
      leftSide = height[i];
      leftIndex = i;
    }
    if(rightSide < height[height.length - i - 1]) {
      rightSide = height[height.length - i - 1];
      rightIndex = height.length - i - 1;
    }
 
    if(leftSide > rightSide && area < rightSide * (rightIndex - leftIndex)){
      area = rightSide * (rightIndex - leftIndex);
    }
    else if(leftSide <= rightSide && area < leftSide * (rightIndex - leftIndex)) {
      area = leftSide * (rightIndex - leftIndex);
    }
    console.log("l ", leftIndex, " r ", rightIndex, " ",  i, " ", (height.length - 1 - i), " ", leftSide, " ", rightSide, " ", area);
  }
  return area;
};

// console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,2,4,3]));
