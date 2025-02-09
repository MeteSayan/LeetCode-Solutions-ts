function getLucky(s: string, k: number): number {
	let numStr = '';

	for (let x = 0; x < s.length; x++) {
		numStr += (s.charCodeAt(x) - 96).toString();
	}

	while (k--) {
		let sum = 0;
		for (let x = 0; x < numStr.length; x++) {
			sum += Number(numStr[x]);
		}
		numStr = sum.toString();
	}

	return Number(numStr);
}
