function removeStars(s: string): string {
	const result: string[] = [];

	for (let char of s) {
		if (char === '*') result.pop();
		else result.push(char);
	}

	return result.join('');
}
