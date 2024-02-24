function countBits(n: number): number[] {
	if (n === 0) return [0];
	const arr = new Array(n).fill(0);

	for (let x = 0; x <= n; x++) {
		arr[x] = arr[x >> 1] + (x & 1);
	}

	return arr;
}
