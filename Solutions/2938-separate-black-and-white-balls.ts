function minimumSteps(s: string): number {
	let count: number = 0;
	let out: number = 0;
	for (let x = s.length - 1; x >= 0; x--) {
		if (s[x] == '0') count++;
		else out += count;
	}
	return out;
}
