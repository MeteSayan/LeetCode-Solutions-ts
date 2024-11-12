function maximumCount(nums: number[]): number {
	let negCt = 0;
	let posCt = 0;

	for (let x = 0; x < nums.length; x++) {
		if (nums[x] < 0) negCt++;
		else if (nums[x] > 0) posCt++;
	}

	return Math.max(negCt, posCt);
}
