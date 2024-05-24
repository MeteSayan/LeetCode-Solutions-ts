function findNonMinOrMax(nums: number[]): number {
	let min = Math.min(...nums);
	let max = Math.max(...nums);

	for (let x = 0; x < nums.length; x++) {
		if (nums[x] !== min && nums[x] !== max) {
			return nums[x];
		}
	}

	return -1;
}
