function toLowerCase(s: string): string {
	let result = '';
	for (let x = 0; x < s.length; x++) {
		if (s.charCodeAt(x) >= 65 && s.charCodeAt(x) <= 90)
			result += String.fromCharCode(s.charCodeAt(x) + 32);
		else result += s[x];
	}
	return result;
}
