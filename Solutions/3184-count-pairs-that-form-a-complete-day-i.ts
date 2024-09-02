function countCompleteDayPairs(hours: number[]): number {
	let ct = 0;

	for (let x = 0; x < hours.length; x++) {
		for (let y = x + 1; y < hours.length; y++) {
			if ((hours[x] + hours[y]) % 24 === 0) ct++;
		}
	}

	return ct;
}
