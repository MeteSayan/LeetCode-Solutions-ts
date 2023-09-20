function hammingWeight(n: number): number {
	let ct = 0;

	for (let x = 0; x < 32; x++) {
		if ((n & 1) === 1) {
			ct++;
		}
		n >>= 1;
	}
	return ct;
}
