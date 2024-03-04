function removeOuterParentheses(s: string): string {
	const arrFromS = s.split('');
	let count = 0;

	for (let i = 0; i < arrFromS.length; i++) {
		if (arrFromS[i] === '(') {
			count++;
			if (count === 1) {
				arrFromS[i] = '';
			}
		} else {
			count--;
			if (count === 0) {
				arrFromS[i] = '';
			}
		}
	}

	return arrFromS.join('');
}
