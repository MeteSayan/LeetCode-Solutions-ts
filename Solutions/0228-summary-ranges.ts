function summaryRanges(nums: number[]): string[] {
	const result: string[] = [];
	let str = '';

	let start = nums[0];

	for (let x = 1; x <= nums.length; x++) {
		if (nums[x] - nums[x - 1] === 1) continue;

		str = start === nums[x - 1] ? `${start}` : `${start}->${nums[x - 1]}`;

		result.push(str);
		start = nums[x];
	}

	return result;
}
