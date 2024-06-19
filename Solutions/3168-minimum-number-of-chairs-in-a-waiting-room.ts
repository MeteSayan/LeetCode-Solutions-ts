function minimumChairs(s: string): number {
	let ct = 0;
	let max = 0;

	for (let x = 0; x < s.length; x++) {
		if (s[x] == 'E') ct++;
		else ct--;
		max = Math.max(ct, max);
	}

	return max;
}
