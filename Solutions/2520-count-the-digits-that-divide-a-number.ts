function countDigits(num: number): number {
	let ct = 0;
	const numStr = String(num);

	for (let x = 0; x < numStr.length; x++) {
		if (num % Number(numStr[x]) === 0) {
			ct++;
		}
	}

	return ct;
}
