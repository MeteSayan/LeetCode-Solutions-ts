function freqAlphabets(s: string): string {
	let result = '';

	for (let x = 0; x < s.length; x++) {
		if (s[x + 2] !== '#') {
			result += String.fromCharCode(96 + Number(s[x]));
		} else {
			result += String.fromCharCode(96 + Number(s[x] + s[x + 1]));
			x += 2;
		}
	}

	return result;
}
