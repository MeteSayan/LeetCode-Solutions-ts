function decrypt(code: number[], k: number): number[] {
	const len: number = code.length;
	const result: number[] = new Array(len).fill(0);

	if (k === 0) return result;

	let wSum: number = 0;
	const start: number = k > 0 ? 1 : len + k;
	const end: number = k > 0 ? k : len - 1;

	for (let x = start; x <= end; x++) {
		wSum += code[x % len];
	}

	for (let x = 0; x < len; x++) {
		result[x] = wSum;
		wSum -= code[(start + x) % len];
		wSum += code[(end + x + 1) % len];
	}
	return result;
}
