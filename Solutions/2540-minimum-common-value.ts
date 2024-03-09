function getCommon(nums1: number[], nums2: number[]): number {
	const map = new Map<number, number>();
	let result = -1;

	for (let x = 0; x < nums1.length; x++) {
		map.set(nums1[x], 1);
	}

	for (let x = 0; x < nums2.length; x++) {
		if (map.has(nums2[x])) {
			result = nums2[x];
			break;
		}
	}

	return result;
}
