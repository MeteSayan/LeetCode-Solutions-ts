function countGoodSubstrings(s: string): number {
	let result: string[] = [];

	for (let x = 0; x < s.length - 2; x++) {
		let word = s.substring(x, x + 3);
		if (new Set(word).size == 3) {
			result.push(word);
		}
	}

	return result.length;
}
