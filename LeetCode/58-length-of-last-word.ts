//Answer 1 (Better in memory)
function lengthOfLastWord(s: string): number {
	let result: number = 0;
	s = s.trim();
	for (let x = s.length - 1; x > 0; x--) {
		if (s[x] == ' ') {
			result = s.length - (x + 1);
			break;
		}
	}

	return result == 0 ? s.length : result;
}

//Answer 2 (Better in runtime)
function lengthOfLastWord2(s: string): number {
	return s.trim().split(' ').slice(-1)[0].length;
}
