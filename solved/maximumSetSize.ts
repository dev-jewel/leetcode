function maximumSetSize(nums1: number[], nums2: number[]): number {
  let result =
    (new Set(nums1).size > nums1.length / 2
      ? nums1.length / 2
      : new Set(nums1).size) +
    (new Set(nums2).size > nums1.length / 2
      ? nums1.length / 2
      : new Set(nums2).size);

  if (new Set([...nums1, ...nums2]).size < result) {
    return new Set([...nums1, ...nums2]).size;
  }

  return result;
}

const num1 = [1, 1, 2, 2, 3, 3];
const num2 = [4, 4, 5, 5, 6, 6];

console.log(maximumSetSize(num1, num2));
