function commonChars(words: string[]): string[] {
	let result = words[0].split('');
	let tempArr: string[] = [];

	for (let x = 1; x < words.length; x++) {
		for (let y = 0; y < words[x].length; y++) {
			const char = words[x][y];
			const idx = result.indexOf(char);

			if (idx !== -1) {
				tempArr.push(char);
				result.splice(idx, 1);
			}
		}
		result = tempArr;
		tempArr = [];
	}

	return result;
}
