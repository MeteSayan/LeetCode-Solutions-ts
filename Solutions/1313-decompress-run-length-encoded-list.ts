function decompressRLElist(nums: number[]): number[] {
	let result: number[] = [];

	for (let x = 0; x < nums.length; x += 2) {
		for (let y = 0; y < nums[x]; y++) {
			result.push(nums[x + 1]);
		}
	}

	return result;
};
