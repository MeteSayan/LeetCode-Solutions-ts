function arrayPairSum(nums: number[]): number {
	nums.sort((a, b) => a - b);
	let sum = 0;

	for (let i = 0; i < nums.length; i = i + 2) {
		sum += nums[i];
	}

	return sum;
}
