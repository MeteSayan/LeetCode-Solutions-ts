function fib(n: number): number {
	if (n === 0) return 0;
	if (n === 1) return 1;

	let cur = 0;
	let next = 1;
	for (let i = 2; i <= n; i++) {
		[cur, next] = [next, cur + next];
	}

	return next;
}
