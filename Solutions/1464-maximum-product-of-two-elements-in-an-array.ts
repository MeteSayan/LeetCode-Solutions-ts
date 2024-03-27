function maxProduct(nums: number[]): number {
	let firstMax = 0;
	let secondMax = 0;

	for (let x = 0; x < nums.length; x++) {
		if (nums[x] > firstMax) {
			secondMax = firstMax;
			firstMax = nums[x];
		} else if (nums[x] > secondMax) {
			secondMax = nums[x];
		}
	}

	return (firstMax - 1) * (secondMax - 1);
}
