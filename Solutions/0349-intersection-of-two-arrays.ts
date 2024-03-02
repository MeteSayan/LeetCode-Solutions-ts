function intersection(nums1: number[], nums2: number[]): number[] {
  const result = nums1.filter((num) => nums2.includes(num));
  return [...new Set(result)];
}
