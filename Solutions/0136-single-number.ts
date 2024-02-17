function singleNumber(nums: number[]): number {
	let obj = {};
	let result = 0;

	for (let x = 0; x < nums.length; x++) {
		obj[nums[x]] = obj[nums[x]] ? obj[nums[x]] + 1 : 1;
	}

	for (let key in obj) {
		if (obj[key] === 1) return (result = parseInt(key));
	}

	return result;
}
