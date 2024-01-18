function arithmeticTriplets(nums: number[], diff: number): number {
	const listOfArrays: number[][] = [];
	let count = 0;

	for (let x = 0; x < nums.length; x++) {
		for (let y = x + 1; y < nums.length; y++) {
			if (nums[y] - nums[x] === diff) {
				listOfArrays.push([nums[x], nums[y]]);
			}
		}
	}

	for (let x = 0; x < listOfArrays.length; x++) {
		for (let y = 0; y < nums.length; y++) {
			if (nums[y] - listOfArrays[x][1] === diff) {
				count++;
			}
		}
	}

	return count;
}
