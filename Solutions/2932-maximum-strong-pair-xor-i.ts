function maximumStrongPairXor(nums: number[]): number {
	let xorList: number[] = [];

	for (let x = 0; x < nums.length; x++) {
		for (let y = x; y < nums.length; y++) {
			if (Math.abs(nums[x] - nums[y]) <= Math.min(nums[x], nums[y])) {
				xorList.push(nums[x] ^ nums[y]);
			}
		}
	}

	return Math.max(...xorList);
}
