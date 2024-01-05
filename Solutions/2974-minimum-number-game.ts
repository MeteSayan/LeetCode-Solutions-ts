function numberGame(nums: number[]): number[] {
	if (nums.length === 0) return [];
	const resultArr: number[] = [];
	const sortedNums = [...nums].sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i += 2) {
		resultArr.push(sortedNums[i + 1]);
		resultArr.push(sortedNums[i]);
	}

	return resultArr;
}
