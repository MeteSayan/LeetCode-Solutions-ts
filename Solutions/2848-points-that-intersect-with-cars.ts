function numberOfPoints(nums: number[][]): number {
	const set = new Set();

	nums.forEach(([start, end]) => {
		while (start <= end) {
			set.add(start);
			start++;
		}
	});

	return set.size;
}
