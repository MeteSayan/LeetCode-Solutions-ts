function checkValidString(s: string): boolean {
	let leftStack: number[] = [],
		starStack: number[] = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') leftStack.push(i);
		else if (s[i] === '*') starStack.push(i);
		else {
			if (leftStack.length > 0) leftStack.pop();
			else if (starStack.length > 0) starStack.pop();
			else return false;
		}
	}

	while (leftStack.length && starStack.length) {
		if (leftStack.pop() > starStack.pop()) return false;
	}

	return leftStack.length === 0;
}
