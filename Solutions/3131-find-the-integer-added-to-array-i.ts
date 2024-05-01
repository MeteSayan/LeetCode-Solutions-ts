function addedInteger(nums1: number[], nums2: number[]): number {
	const sortedArr1 = nums1.sort((a, b) => a - b);
	const sortedArr2 = nums2.sort((a, b) => a - b);

	return sortedArr2[0] - sortedArr1[0];
}
