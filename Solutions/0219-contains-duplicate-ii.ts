function containsNearbyDuplicate(nums: number[], k: number): boolean {
	const obj: { [key: number]: number } = {};
	let result: boolean = false;

	for (let x = 0; x < nums.length; x++) {
		if (obj[nums[x]] === undefined) {
			obj[nums[x]] = x;
		} else if (x - obj[nums[x]] <= k) {
			result = true;
			break;
		} else if (x - obj[nums[x]] > k) {
			obj[nums[x]] = x;
		}
	}

	return result;
}
