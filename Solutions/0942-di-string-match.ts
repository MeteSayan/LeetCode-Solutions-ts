function diStringMatch(s: string): number[] {
	let low = 0;
	let high = s.length;
	const result: number[] = [];

	for (let x = 0; x < s.length; x++) {
		if (s[x] == 'I') {
			result.push(low++);
		} else {
			result.push(high--);
		}
	}

	return [...result, low];
}
