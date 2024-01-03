function differenceOfSums(n: number, m: number): number {
	let result = 0;
	for (let x = 1; x <= n; x++) {
		if (x % m === 0) {
			result -= x;
		} else {
			result += x;
		}
	}
	return result;
}
