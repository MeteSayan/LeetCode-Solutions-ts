function findMaxK(nums: number[]): number {
	let seen = new Set<number>();
	let res = -1;

	for (let num of nums) {
		if (seen.has(-num)) {
			res = Math.max(res, Math.abs(num));
		}
		seen.add(num);
	}

	return res;
}
