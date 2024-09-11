function countBalls(lowLimit: number, highLimit: number): number {
	const map = new Map();

	for (let x = lowLimit; x <= highLimit; x++) {
		let num = x;
		let sum = 0;
		while (num > 0) {
			sum += num % 10;
			num = Math.floor(num / 10);
		}
		map.set(sum, (map.get(sum) || 0) + 1);
	}

	return Math.max(...map.values());
}
