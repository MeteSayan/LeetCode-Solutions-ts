function canAliceWin(nums: number[]): boolean {
	let sum1 = 0;
	let sum2 = 0;

	for (let x of nums) {
		if (x >= 10) {
			sum1 += x;
		} else {
			sum2 += x;
		}
	}

	return sum1 !== sum2;
}
