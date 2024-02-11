function findMatrix(nums: number[]): number[][] {
	const result: number[][] = [[]];

	if (nums.length === 0) return [];

	for (let x = 0; x < nums.length; x++) {
		for (let y = 0; y < result.length; y++) {
			if (result[y].indexOf(nums[x]) === -1) {
				result[y].push(nums[x]);
				break;
			} else if (y === result.length - 1) {
				result.push([nums[x]]);
				break;
			}
		}
	}

	return result;
}
