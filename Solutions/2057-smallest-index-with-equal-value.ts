function smallestEqual(nums: number[]): number {
	for (let x = 0; x < nums.length; x++) {
		if (x % 10 === nums[x]) {
			return x;
		}
	}

	return -1;
}
