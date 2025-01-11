type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
	if (nums.length === 0) return init;

	let result: number = init;
	for (let x = 0; x < nums.length; x++) {
		result = fn(result, nums[x]);
	}

	return result;
}
