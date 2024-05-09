function commonFactors(a: number, b: number): number {
	let ct = 0;
	if (a === b) ct++;
	const max = Math.max(a, b);

	for (let x = 0; x <= max / 2; x++) {
		if (a % x === 0 && b % x === 0) {
			ct++;
		}
	}

	return ct;
}
