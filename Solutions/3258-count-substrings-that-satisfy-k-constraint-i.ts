function countKConstraintSubstrings(s: string, k: number): number {
	let totalCount = 0;

	for (let start = 0; start < s.length; start++) {
		let count0 = 0;
		let count1 = 0;

		for (let end = start; end < s.length; end++) {
			if (s[end] === '0') count0++;
			else count1++;

			if (count0 > k && count1 > k) break;

			totalCount++;
		}
	}

	return totalCount;
}
