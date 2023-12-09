function getConcatenation(nums: number[]): number[] {
	nums.push(...nums);
	return nums;
}
