function countConsistentStrings(allowed: string, words: string[]): number {
	const allowedSet = new Set(allowed);
	let count = 0;
	for (const word of words) {
		let isConsistent = true;
		for (const char of word) {
			if (!allowedSet.has(char)) {
				isConsistent = false;
				break;
			}
		}
		if (isConsistent) {
			count++;
		}
	}
	return count;
}
