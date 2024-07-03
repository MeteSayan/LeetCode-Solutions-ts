function clearDigits(s: string): string {
	const stack: any = [];

	for (const c of s) {
		if (c >= '0' && c <= '9') {
			stack.pop();
		} else {
			stack.push(c);
		}
	}

	return stack.join('');
}
