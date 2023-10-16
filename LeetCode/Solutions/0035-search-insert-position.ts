function searchInsert(nums: number[], target: number): number {
	let index = 0;
	for (let x = 0; x < nums.length; x++) {
		if (nums[nums.length - 1] < target) {
			index = nums.length;
			break;
		}
		if (nums[x] >= target) {
			index = x;
			break;
		}
	}
	return index;
}
