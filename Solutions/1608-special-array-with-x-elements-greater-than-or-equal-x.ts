function specialArray(nums: number[]): number {
	nums.sort((a, b) => a - b);
	const n = nums.length;

	for (let i = 0; i <= n; i++) {
		const x = n - i;

		if ((i === n || nums[i] >= x) && (i === 0 || nums[i - 1] < x)) {
			return x;
		}
	}

	return -1;
}
