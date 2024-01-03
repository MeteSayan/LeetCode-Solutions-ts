function smallestEvenMultiple(n: number): number {
	if (n % 2 === 0) return n;

	let result: number = n + 1;
	while (result % n !== 0 || result % 2 !== 0) {
		result++;
	}

	return result;
}
