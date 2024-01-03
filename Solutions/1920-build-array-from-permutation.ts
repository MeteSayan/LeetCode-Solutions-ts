function buildArray(nums: number[]): number[] {
	const result: number[] = [];
	for (let x = 0; x < nums.length; x++) {
		result.push(nums[nums[x]]);
	}
	return result;
}
