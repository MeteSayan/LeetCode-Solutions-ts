function sumBase(n: number, k: number): number {
	let sum = 0;

	while (n > 0) {
		const rest = Math.floor(n / k);
		sum += n % k;

		if (rest < k) {
			sum += rest;
			break;
		}

		n = rest;
	}

	return sum;
}
