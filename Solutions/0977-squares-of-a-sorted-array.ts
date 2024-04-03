function sortedSquares(nums: number[]): number[] {
	let n = nums.length;
	let result: number[] = new Array(n);
	let i = 0,
		j = n - 1;

	for (let x = n - 1; x >= 0; x--) {
		if (Math.abs(nums[i]) > Math.abs(nums[j])) {
			result[x] = nums[i] * nums[i];
			i++;
		} else {
			result[x] = nums[j] * nums[j];
			j--;
		}
	}

	return result;
}
