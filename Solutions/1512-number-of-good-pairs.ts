function numIdenticalPairs(nums: number[]): number {
	let ct = 0;
	for (let x = 0; x < nums.length; x++) {
		for (let y = 0; y < nums.length; y++) {
			if (nums[x] === nums[y] && x < y) ct++;
		}
	}
	return ct;
}
