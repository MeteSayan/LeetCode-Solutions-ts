function restoreString(s: string, indices: number[]): string {
	let result: string[] = new Array(s.length).fill('');
	let i = 0;

	for (const num of indices) {
		result[num] = s[i];
		i++;
	}

	return result.join('');
}
