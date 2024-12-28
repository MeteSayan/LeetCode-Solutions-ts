function frequencySort(nums: number[]): number[] {
	const frequencyMap = new Map<number, number>();

	for (let num of nums) {
		frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
	}

	nums.sort((a, b) => {
		const freqA = frequencyMap.get(a)!;
		const freqB = frequencyMap.get(b)!;

		if (freqA === freqB) {
			return b - a;
		}

		return freqA - freqB;
	});

	return nums;
}
