function differenceOfSum(nums: number[]): number {
	let sumOfElements = 0;
	let sumOfDigits = 0;

	for (let i = 0; i < nums.length; i++) {
		sumOfElements += nums[i];
		sumOfDigits += getSumOfDigits(nums[i]);
	}

	return sumOfElements - sumOfDigits;
}

function getSumOfDigits(num: number): number {
	let sum = 0;

	while (num > 0) {
		sum += num % 10;
		num = Math.floor(num / 10);
	}

	return sum;
}
