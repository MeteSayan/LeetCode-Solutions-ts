function selfDividingNumbers(left: number, right: number): number[] {
	const result: number[] = [];

	for (let x = left; x <= right; x++) {
		if (x % 10 !== 0 && isSelfDividing(x)) {
			result.push(x);
		}
	}

	return result;
}

function isSelfDividing(x: number): boolean {
	let num = x;
	while (num > 0) {
		const digit = num % 10;
		if (digit === 0 || x % digit !== 0) {
			return false;
		}
		num = Math.floor(num / 10);
	}
	return true;
}
