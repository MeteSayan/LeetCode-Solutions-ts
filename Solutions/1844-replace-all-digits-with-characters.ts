function replaceDigits(s: string): string {
	let result = '';

	for (let x = 0; x < s.length; x += 2) {
		if (x + 1 < s.length) {
			result += s[x] + String.fromCharCode(s.charCodeAt(x) + Number(s[x + 1]));
		} else {
			result += s[x];
		}
	}

	return result;
}
