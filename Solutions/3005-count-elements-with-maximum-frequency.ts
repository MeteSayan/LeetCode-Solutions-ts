function maxFrequencyElements(nums: number[]): number {
	const map = new Map<number, number>();
	let maxFrequency = 1;
	let result = 0;

	for (let x = 0; x < nums.length; x++) {
		if (map.has(nums[x])) {
			map.set(nums[x], (map.get(nums[x]) as number) + 1);
			if ((map.get(nums[x]) as number) > maxFrequency) {
				maxFrequency = map.get(nums[x]) as number;
			}
		} else {
			map.set(nums[x], 1);
		}
	}

	for (let value of map.values()) {
		if (value === maxFrequency) {
			result += value;
		}
	}

	return result;
}
