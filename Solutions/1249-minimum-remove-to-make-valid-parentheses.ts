function minRemoveToMakeValid(s: string): string {
	const arrOfParentheses = s.split('');
	const stack: { index: number; char: string }[] = [];
	for (let x = 0; x < arrOfParentheses.length; x++) {
		if (arrOfParentheses[x] === '(') {
			stack.push({ index: x, char: '(' });
		} else if (arrOfParentheses[x] === ')') {
			if (stack.length > 0 && stack[stack.length - 1].char === '(') {
				stack.pop();
			} else {
				stack.push({ index: x, char: ')' });
			}
		}
	}

	const indexesToRemove = new Set(stack.map((item) => item.index));
	let result = '';
	for (let y = 0; y < arrOfParentheses.length; y++) {
		if (!indexesToRemove.has(y)) {
			result += arrOfParentheses[y];
		}
	}

	return result;
}
