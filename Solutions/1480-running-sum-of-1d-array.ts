function runningSum(nums: number[]): number[] {
	let ct = 0;
	return nums.map((n) => {
		ct += n;
		return ct;
	});
}
