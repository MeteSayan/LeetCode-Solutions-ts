function minOperations(nums: number[], k: number): number {
	let xorSum = 0;
	for (let num of nums) {
		xorSum ^= num;
	}

	let diff = xorSum ^ k;
	let ct = 0;
	while (diff > 0) {
		ct += diff & 1;
		diff >>= 1;
	}

	return ct;
}
