function xorOperation(n: number, start: number): number {
	let answer = 0;
	for (let i = 0; i < n; i++) {
		answer ^= start + 2 * i;
	}
	return answer;
}
