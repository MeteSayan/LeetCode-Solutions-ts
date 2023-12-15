function leftRightDifference(nums: number[]): number[] {
	let rightSumCt = 0;
	let leftSumCt = 0;
	const leftSum: number[] = [];
	const rightSum: number[] = [];
	for (let i = 0, j = nums.length - 1; i < nums.length && j >= 0; i++, j--) {
		if (i === 0 && j === nums.length - 1) {
			leftSum.push(0);
			rightSum.unshift(0);
		} else {
			leftSum.push(leftSumCt + nums[i - 1]);
			rightSum.unshift(rightSumCt + nums[j + 1]);
			leftSumCt += nums[i - 1];
			rightSumCt += nums[j + 1];
		}
	}

	const result: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		result.push(Math.abs(leftSum[i] - rightSum[i]));
	}

	return result;
}
