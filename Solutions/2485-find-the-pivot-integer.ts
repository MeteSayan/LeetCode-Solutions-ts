function pivotInteger(n: number): number {
	let sum = ((n + 1) * n) / 2;
	let pivot = Math.sqrt(sum);

	return pivot % 1 === 0 ? pivot : -1;
}
