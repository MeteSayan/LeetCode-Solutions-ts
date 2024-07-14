function sumZero(n: number): number[] {
	if (n === 0) return [];
	if (n === 1) return [0];

	const result: number[] = [];

	for (let x = 1; x < n / 2 + 1; x++) {
		if (n % 2 === 1 && x == 1) {
			result.push(0);
			continue;
		}

		result.push(x);
		result.unshift(-x);
	}

	return result;
}
