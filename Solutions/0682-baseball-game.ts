function calPoints(ops: string[]): number {
	const stack: number[] = [];

	for (const op of ops) {
		if (!isNaN(Number(op))) {
			stack.push(Number(op));
		} else if (op === '+') {
			const last = stack[stack.length - 1];
			const secondLast = stack[stack.length - 2];
			stack.push(last + secondLast);
		} else if (op === 'D') {
			stack.push(2 * stack[stack.length - 1]);
		} else if (op === 'C') {
			stack.pop();
		}
	}

	return stack.reduce((acc, score) => acc + score, 0);
}
