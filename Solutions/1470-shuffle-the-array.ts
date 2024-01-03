function shuffle(nums: number[], n: number): number[] {
	let result: number[] = [];
	for (let x = 0, y = n; y < 2 * n; x++, y++) {
		result.push(nums[x]);
		result.push(nums[y]);
	}
	return result;
};
