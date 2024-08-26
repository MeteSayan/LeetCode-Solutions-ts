function digitCount(num: string): boolean {
	let map = new Map();

	for (let ch of num) {
		let chToNum = Number(ch);
		map.set(chToNum, (map.get(chToNum) || 0) + 1);
	}

	for (let x = 0; x < num.length; x++) {
		if (Number(num[x]) !== (map.get(x) || 0)) return false;
	}

	return true;
}
