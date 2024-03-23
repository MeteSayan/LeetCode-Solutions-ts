// Solution 1
function findDifference(nums1: number[], nums2: number[]): number[][] {
	const map1 = new Map<number, number>();
	const map2 = new Map<number, number>();
	const maxLemgth = Math.max(nums1.length, nums2.length);

	for (let x = 0; x < maxLemgth; x++) {
		if (nums1[x] !== undefined) map1.set(nums1[x], 1);
		if (nums2[x] !== undefined) map2.set(nums2[x], 1);
	}

	const result: number[][] = [[], []];
	for (let key of map1.keys()) {
		if (!map2.has(key)) {
			result[0].push(key);
		}
	}

	for (let key of map2.keys()) {
		if (!map1.has(key)) {
			result[1].push(key);
		}
	}

	return result;
}

// Solution 2
function findDifference2(nums1: number[], nums2: number[]): number[][] {
	// Creating two Sets for both Array of numbers.
	const [ansSet1, ansSet2] = [new Set(nums1), new Set(nums2)];

	return [
		// Filtering the first Set by occurences in the second Set via delete
		// we get a filtered Set for the second answer-item.
		[...ansSet1].filter((n) => !ansSet2.delete(n)),
		[...ansSet2],
	];
}
