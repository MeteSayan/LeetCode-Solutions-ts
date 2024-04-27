function sumOfUnique(nums: number[]): number {
	let result = 0;
	const map = new Map<number, number>();

	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	for (const [key, value] of map) {
		if (value === 1) {
			result += key;
		}
	}

	return result;
}
