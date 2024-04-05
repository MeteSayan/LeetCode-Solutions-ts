function makeGood(s: string): string {
	let stack: string[] = [];
	for (let i = 0; i < s.length; i++) {
		if (
			stack.length > 0 &&
			Math.abs(stack[stack.length - 1].charCodeAt(0) - s[i].charCodeAt(0)) === 32
		) {
			stack.pop();
		} else {
			stack.push(s[i]);
		}
	}
	return stack.join('');
}
