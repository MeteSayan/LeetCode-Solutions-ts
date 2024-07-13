function similarPairs(words: string[]): number {
	let ct = 0;

	for (let x = 0; x < words.length; x++) {
		for (let y = x + 1; y < words.length; y++) {
			const set1 = new Set<string>(words[x]);
			const set2 = new Set<string>(words[y]);

			if (areSetsEqual(set1, set2)) {
				ct++;
			}
		}
	}

	return ct;
}

function areSetsEqual(set1: Set<string>, set2: Set<string>): boolean {
	if (set1.size !== set2.size) {
		return false;
	}

	for (let item of set1) {
		if (!set2.has(item)) {
			return false;
		}
	}

	return true;
}
