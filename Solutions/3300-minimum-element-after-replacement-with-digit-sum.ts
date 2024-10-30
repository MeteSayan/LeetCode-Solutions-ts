function minElement(nums: number[]): number {
	let minSum = Infinity;

	for (const num of nums) {
		let sum = 0;
		let n = num;
		while (n > 0) {
			sum += n % 10;
			n = Math.floor(n / 10);
		}
		if (sum < minSum) minSum = sum;
	}

	return minSum;
}
