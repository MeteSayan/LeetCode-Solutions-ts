function findNumbers(nums: number[]): number {
	let ct = 0;

	for (let x = 0; x < nums.length; x++) {
		if (nums[x].toString().length % 2 === 0) ct++;
	}

	return ct;
}
