function maximum69Number(num: number): number {
	let numStr = num.toString();
	let result = num;

	for (let x = 0; x < numStr.length; x++) {
		if (numStr[x] === '6') {
			result = parseInt(numStr.substring(0, x) + '9' + numStr.substring(x + 1));
			break;
		}
	}

	return result;
}
