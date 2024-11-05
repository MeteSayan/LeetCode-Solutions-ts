function minChanges(s: string): number {
	let ct = 0;

	for (let x = 0; x < s.length; x = x + 2) {
		if (s[x] != s[x + 1]) ct++;
	}

	return ct;
}
