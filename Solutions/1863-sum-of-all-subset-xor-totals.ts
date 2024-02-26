function subsetXORSum(nums: number[]): number {
	let result = 0;

	function backtrack(index: number, currentXOR: number): void {
		if (index === nums.length) {
			result += currentXOR;
			return;
		}

		// Include the current number in the subset
		backtrack(index + 1, currentXOR ^ nums[index]);

		// Exclude the current number from the subset
		backtrack(index + 1, currentXOR);
	}

	backtrack(0, 0);

	return result;
}
