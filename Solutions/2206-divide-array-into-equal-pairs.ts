function divideArray(nums: number[]): boolean {
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i += 2) {
		if (nums[i] !== nums[i + 1]) {
			return false;
		}
	}

	return true;
}
