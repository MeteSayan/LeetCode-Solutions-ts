function isArraySpecial(nums: number[]): boolean {
	let result = true;
	if (nums.length === 1) return result;

	for (let x = 0; x < nums.length - 1; x++) {
		if ((nums[x] + nums[x + 1]) % 2 === 0) {
			result = false;
			break;
		}
	}

	return result;
}
