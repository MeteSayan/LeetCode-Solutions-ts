function numberOfSteps(num: number): number {
	let steps = 0;

	while (num > 0) {
		if (num % 2 === 0) {
			num /= 2;
			steps;
		} else {
			num--;
		}
		steps++;
	}

	return steps;
}
