function generateTheString(n: number): string {
	let result = '';

	if (n % 2 === 0) {
		result += 'a';
		result += 'b'.repeat(n - 1);
	} else {
		result += 'a'.repeat(n);
	}

	return result;
}
