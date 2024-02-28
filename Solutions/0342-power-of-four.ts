// Solution 1
function isPowerOfFour(n: number): boolean {
	if (n === 0) return false;
	if (n === 1) return true;
	return n > 0 && Number.isInteger(Math.log2(n) / 2);
}

// Solution 2
function isPowerOfFour2(n: number): boolean {
	if (n === 0) return false;
	if (n === 1) return true;
	return n > 0 && Number.isInteger(Math.log10(n) / Math.log10(4));
}
