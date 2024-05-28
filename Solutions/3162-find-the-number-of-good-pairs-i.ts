function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
	var ct = 0;

	for (let x = 0; x < nums1.length; x++) {
		for (let y = 0; y < nums2.length; y++) {
			if (nums1[x] % (nums2[y] * k) === 0) {
				ct++;
			}
		}
	}

	return ct;
}
