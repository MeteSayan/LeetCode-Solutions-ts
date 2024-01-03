function addDigits(num: number): number {
	let newNumber = 999;
	let digits = num.toString().split('');
	while (newNumber >= 10) {
		newNumber = sumNums(digits);
		if (newNumber >= 10) digits = newNumber.toString().split('');
	}
	return newNumber;
}

function sumNums(digits: string[]) {
	let numSum = 0;
	for (let x = 0; x < digits.length; x++) {
		numSum += parseInt(digits[x]);
	}
	return numSum;
}
