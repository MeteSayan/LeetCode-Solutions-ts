function targetIndices(nums: number[], target: number): number[] {
	const result: number[] = [];
	nums.sort((a, b) => a - b);

	for (let x = 0; x < nums.length; x++) {
		if (nums[x] == target) {
			result.push(x);
		} else if (result.length) break;
	}

	return result;
}
