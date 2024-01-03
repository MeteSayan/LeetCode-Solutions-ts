function isUgly(n: number): boolean {
	if (n == 0) return false;
	n = maxDivide(n, 2);
	n = maxDivide(n, 3);
	n = maxDivide(n, 5);

	return n == 1;
	function maxDivide(a: number, b: number) {
		while (a % b == 0) {
			a = a / b;
		}
		return a;
	}
}
