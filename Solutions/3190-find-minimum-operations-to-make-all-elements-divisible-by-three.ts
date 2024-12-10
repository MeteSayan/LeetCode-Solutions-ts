function minimumOperations(nums: number[]): number {
	let ct = 0;

	for (let x = 0; x < nums.length; x++) {
		if (nums[x] % 3 !== 0) ct++;
	}

	return ct;
}
