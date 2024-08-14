function distinctDifferenceArray(nums: number[]): number[] {
	const leftSet = new Set<number>();

	return nums.map((num, index) => {
		leftSet.add(num);
		const rightSet = new Set<number>(nums.slice(index + 1));
		return leftSet.size - rightSet.size;
	});
}
