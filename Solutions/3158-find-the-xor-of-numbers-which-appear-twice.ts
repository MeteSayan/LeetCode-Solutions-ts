function duplicateNumbersXOR(nums: number[]): number {
	const map = new Map<number, number>();
	let result = 0;

	for (let x = 0; x < nums.length; x++) {
		if (map.has(nums[x])) {
			result ^= nums[x];
		} else {
			map.set(nums[x], 1);
		}
	}

	return result;
}
