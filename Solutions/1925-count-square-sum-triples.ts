function countTriples(n: number): number {
	let ct = 0;

	for (let c = 1; c <= n; c++) {
		for (let a = 1; a < c; a++) {
			const b = Math.sqrt(c * c - a * a);

			if (b % 1 === 0 && b > 0 && b <= n) {
				ct++;
			}
		}
	}

	return ct;
}
