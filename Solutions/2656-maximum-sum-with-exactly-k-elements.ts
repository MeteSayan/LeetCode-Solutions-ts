function maximizeSum(nums: number[], k: number): number {
	let max = Math.max(...nums);
	let sum = 0;

	while (k) {
		k--;
		sum += max++;
	}

	return sum;
}
