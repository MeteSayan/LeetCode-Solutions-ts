function minimumDeletions(s: string): number {
	let ct = 0;
	let delCt = 0;

	for (let x = 0; x < s.length; x++) {
		if (s[x] === 'b') {
			ct += 1;
		} else if (ct > 0) {
			delCt += 1;
			ct -= 1;
		}
	}

	return delCt;
}
