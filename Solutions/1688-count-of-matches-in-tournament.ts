// Solution 1
function numberOfMatches(n: number): number {
	return n - 1;
}

// Solution 2
function numberOfMatches2(n: number): number {
	if (n < 2) return 0;
	const matches = Math.floor(n / 2);
	return matches + numberOfMatches2(Math.ceil(n / 2));
}
