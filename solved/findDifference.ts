function findDifference(nums1: number[], nums2: number[]): number[][] {
  const numsSet1: Set<number> = new Set(nums1);
  const numsSet2: Set<number> = new Set(nums2);
  const resultSet1: Set<number> = new Set();
  
  numsSet1.forEach((value) => {
    if(!numsSet2.has(value)) {
      resultSet1.add(value);
    }    
  });

  const resultSet2: Set<number> = new Set();
  
  numsSet2.forEach((value) => {
    if(!numsSet1.has(value)) {
      resultSet2.add(value)
    }
  });

  return [[...resultSet1.values()], [...resultSet2.values()]]
};

console.log(findDifference([1,2,3,3], [1,1,2,2]));
