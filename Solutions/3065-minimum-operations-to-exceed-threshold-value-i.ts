function minOperations(nums: number[], k: number): number {
	let ct = 0;

	for (let x = 0; x < nums.length; x++) {
		if (nums[x] < k) {
			ct++;
		}
	}

	return ct;
}
