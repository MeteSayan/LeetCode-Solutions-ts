function scoreOfString(s: string): number {
	let result = 0;

	for (let x = 0; x < s.length - 1; x++) {
		result += Math.abs(s[x].charCodeAt(0) - s[x + 1].charCodeAt(0));
	}

	return result;
}
