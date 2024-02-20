function missingNumber(nums: number[]): number {
	const sumWithoutMissingNumber = (nums.length * (nums.length + 1)) / 2;
	let sum = 0;
	for (let x = 0; x < nums.length; x++) {
		sum += nums[x];
	}

	return sumWithoutMissingNumber - sum;
}
