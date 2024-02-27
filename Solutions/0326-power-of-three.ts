function isPowerOfThree(n: number): boolean {
	if (n === 0) return false;
	if (n === 1) return true;
	return n > 0 && Number.isInteger(Math.log10(n) / Math.log10(3));
}
