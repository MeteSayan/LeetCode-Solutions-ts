function minimumSum(num: number): number {
	const arrOfDigits = String(num)
		.split('')
		.sort((a, b) => +a - +b);
	return (
		Number(`${arrOfDigits[0]}${arrOfDigits[2]}`) +
		Number(`${arrOfDigits[1]}${arrOfDigits[3]}`)
	);
}
