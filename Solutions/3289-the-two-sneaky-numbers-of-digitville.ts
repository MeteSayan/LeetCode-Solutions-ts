function getSneakyNumbers(nums: number[]): number[] {
	return nums.filter((num, index) => nums.indexOf(num) !== index);
}
