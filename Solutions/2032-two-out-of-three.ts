function twoOutOfThree(
	nums1: number[],
	nums2: number[],
	nums3: number[]
): number[] {
	const set1 = new Set<number>(nums1);
	const set2 = new Set<number>(nums2);
	const set3 = new Set<number>(nums3);
	const map = new Map<number, number>();
	const result: number[] = [];

	for (let value of set1) {
		map.set(value, (map.get(value) || 0) + 1);
	}
	for (let value of set2) {
		map.set(value, (map.get(value) || 0) + 1);
	}
	for (let value of set3) {
		map.set(value, (map.get(value) || 0) + 1);
	}

	for (const [key, value] of map) {
		if (value > 1) {
			result.push(key);
		}
	}

	return result;
}
