function createTargetArray(nums: number[], index: number[]): number[] {
	let targetArray: number[] = [];
	for (let x = 0; x < nums.length; x++) {
		targetArray.splice(index[x], 0, nums[x]);
	}
	return targetArray;
}
