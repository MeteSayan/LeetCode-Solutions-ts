// Solution 1
function isSameAfterReversals(num: number): boolean {
	const reversedNum = parseInt(num.toString().split('').reverse().join(''));
	const doubleReversedNum = parseInt(
		reversedNum.toString().split('').reverse().join('')
	);

	return num === doubleReversedNum;
}

// Solution 2
function isSameAfterReversals2(num: number): boolean {
	if (num === 0) return true;
	if (num % 10 === 0) return false;
	return true;
}
