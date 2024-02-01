function finalString(s: string): string {
	let result = '';
	for (let x = 0; x < s.length; x++) {
		if (s[x] === 'i' && result.length > 0) {
			result = result.split('').reverse().join('');
		} else {
			result += s[x];
		}
	}

	return result;
}
