function countPairs(nums: number[], k: number): number {
	let ct = 0;

	for (let x = 0; x < nums.length; x++) {
		for (let y = x + 1; y < nums.length; y++) {
			if (nums[x] == nums[y] && (x * y) % k == 0) {
				ct++;
			}
		}
	}

	return ct;
}
