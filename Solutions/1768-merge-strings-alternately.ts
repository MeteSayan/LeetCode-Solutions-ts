function mergeAlternately(word1: string, word2: string): string {
	let result = '',
		ct1 = 0,
		ct2 = 0;

	while (ct1 < word1.length && ct2 < word2.length) {
		result += word1[ct1++];
		result += word2[ct2++];
	}

	while (ct1 < word1.length) {
		result += word1[ct1++];
	}

	while (ct2 < word2.length) {
		result += word2[ct2++];
	}

	return result;
}
