function findGCD(nums: number[]): number {
	const min = Math.min(...nums);
	const max = Math.max(...nums);
	let result = 1;

	for (let x = 2; x <= min; x++) {
		if (min % x === 0 && max % x === 0) {
			result = x;
		}
	}

	return result;
}
