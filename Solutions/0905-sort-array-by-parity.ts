function sortArrayByParity(nums: number[]): number[] {
	if (nums.length < 2) return nums;
	let evenArr: number[] = [];
	let oddArr: number[] = [];

	for (let x = 0; x < nums.length; x++) {
		if (nums[x] % 2 === 0) evenArr.push(nums[x]);
		else oddArr.push(nums[x]);
	}

	evenArr.sort((a, b) => a - b);
	oddArr.sort((a, b) => a - b);

	return evenArr.concat(oddArr);
}
