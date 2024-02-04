function maxDepth(s: string): number {
	let maxDepth: number = 0;
	let depth: number = 0;

	for (let x = 0; x < s.length; x++) {
		if (s[x] === '(') {
			depth++;
			maxDepth = Math.max(maxDepth, depth);
		} else if (s[x] === ')') {
			depth--;
		}
	}

	return maxDepth;
}
