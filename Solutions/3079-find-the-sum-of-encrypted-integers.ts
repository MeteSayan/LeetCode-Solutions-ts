function sumOfEncryptedInt(nums: number[]): number {
	return nums.reduce((sum, num) => sum + encrypt(num), 0);
}

function encrypt(x: number): number {
	const digits = x.toString().split('');

	const maxDigit = Math.max(...digits.map(Number));

	const encryptedString = digits.map(() => maxDigit).join('');
	return Number(encryptedString);
}
