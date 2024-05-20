function fizzBuzz(n: number): string[] {
	const result: string[] = [];

	for (let x = 1; x <= n; x++) {
		if (x % 3 === 0 && x % 5 === 0) {
			result.push('FizzBuzz');
		} else if (x % 3 === 0) {
			result.push('Fizz');
		} else if (x % 5 === 0) {
			result.push('Buzz');
		} else {
			result.push(x.toString());
		}
	}

	return result;
}
