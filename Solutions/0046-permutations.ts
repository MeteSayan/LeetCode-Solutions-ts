function permute(nums: number[]): number[][] {
	const result: number[][] = [];

	if (nums.length === 0) {
		return [];
	} else if (nums.length === 1) {
		return [nums];
	} else {
		for (let i = 0; i < nums.length; i++) {
			const currentNum = nums[i];
			const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
			const remainingNumsPermuted = permute(remainingNums);
			for (let j = 0; j < remainingNumsPermuted.length; j++) {
				const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
				result.push(permutedArray);
			}
		}
	}

	return result;
}
