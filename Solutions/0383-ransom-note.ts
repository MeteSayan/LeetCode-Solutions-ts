function canConstruct(ransomNote: string, magazine: string): boolean {
	const magazineMap = new Map<string, number>();

	for (const char of magazine) {
		magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
	}

	for (let x = 0; x < ransomNote.length; x++) {
		if (magazineMap.has(ransomNote[x]) && magazineMap.get(ransomNote[x])! > 0) {
			magazineMap.set(ransomNote[x], magazineMap.get(ransomNote[x])! - 1);
		} else {
			return false;
		}
	}

	return true;
}
