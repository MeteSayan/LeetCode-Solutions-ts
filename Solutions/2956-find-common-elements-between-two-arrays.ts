function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
	const set1 = new Set(nums1);
	const set2 = new Set(nums2);
	let firstArrayCt = 0,
		secondArrayCt = 0;

	for (const num of nums1) {
		if (set2.has(num)) firstArrayCt++;
	}

	for (const num of nums2) {
		if (set1.has(num)) secondArrayCt++;
	}

	return [firstArrayCt, secondArrayCt];
}
