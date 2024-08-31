function minimumAverage(nums: number[]): number {
	let min = Infinity;
	nums.sort((a, b) => a - b);

	for (let x = 0; x < nums.length / 2; x++) {
		min = Math.min(min, (nums[x] + nums[nums.length - x - 1]) / 2);
	}

	return min;
}
