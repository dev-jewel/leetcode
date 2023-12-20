function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCandiesCount: number = candies[0];
    const resultArray: boolean[] = [];
    for(let i = 1; i < candies.length; i++) {
      if(candies[i] > maxCandiesCount) maxCandiesCount = candies[i];
    }
    
    for(let i = 0; i < candies.length; i++) {
      resultArray.push(candies[i] + extraCandies >= maxCandiesCount);
    }

    return resultArray;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));
