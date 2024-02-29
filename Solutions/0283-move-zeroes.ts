function moveZeroes(nums: number[]): void {
	let len = nums.length;
	for (let x = 0; x < len; x++) {
		if (nums[x] === 0) {
			nums.splice(x, 1);
			nums.push(0);
			x--;
			len--;
		}
	}
}
