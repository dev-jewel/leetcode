/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    
  for(let i = m; i < nums1.length; i++) {
    if(i - m < n) {
      nums1[i] = nums2[i - m];
    } else break;
  }
  nums1.sort();
  
};


merge([1,2,3,0,0,0], 3, [2,5,6], 3);