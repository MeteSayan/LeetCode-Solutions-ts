function percentageLetter(s: string, letter: string): number {
	let ct = 0;

	for (let x = 0; x < s.length; x++) {
		if (s[x] === letter) {
			ct++;
		}
	}

	const result = (ct * 100) / s.length;
	return Math.floor(result);
}
