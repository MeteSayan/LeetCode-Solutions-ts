function countSymmetricIntegers(low: number, high: number): number {
	let count = 0;
	for (let i = low; i <= high; i++) {
		if (isSymmetric(i)) {
			count++;
		}
	}

	return count;
}

function isSymmetric(num: number): boolean {
	const str = num.toString();
	const len = str.length;

	if (len % 2 !== 0) return false;

	let leftSum = 0;
	let rightSum = 0;

	for (let i = 0; i < len / 2; i++) {
		leftSum += parseInt(str[i]);
		rightSum += parseInt(str[len - 1 - i]);
	}

	return leftSum === rightSum;
}
