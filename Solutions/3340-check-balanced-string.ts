function isBalanced(num: string): boolean {
	let oddSum = 0;
	let evenSum = 0;

	for (let x = 0; x < num.length; x++) {
		if (x % 2 === 0) evenSum += Number(num[x]);
		else oddSum += Number(num[x]);
	}

	return oddSum === evenSum;
}
