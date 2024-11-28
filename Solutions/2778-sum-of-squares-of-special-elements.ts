function sumOfSquares(nums: number[]): number {
	let result = 0;
	let n = nums.length;

	for (let x = 1; x < n + 1; x++) {
		if (n % x == 0) {
			result += Math.pow(nums[x - 1], 2);
		}
	}

	return result;
}
