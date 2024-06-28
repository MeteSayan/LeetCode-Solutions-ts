function splitWordsBySeparator(words: string[], separator: string): string[] {
	const result: any[] = [];
	for (let x = 0; x < words.length; x++) {
		result[x] = words[x].split(separator);
	}

	return result.flat().filter((word) => word !== '');
}
