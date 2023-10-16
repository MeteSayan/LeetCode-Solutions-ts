function plusOne(digits: number[]): number[] {
	// Numbers or bigint conversion not will work in this question. There is no length limit for the arrays. And we have limits at number and bigint variables :)
	for (let x = digits.length - 1; x >= 0; x--) {
		// Is digit last number equal to 9
		if (digits[digits.length - 1] != 9) {
			digits[digits.length - 1] = digits[digits.length - 1] + 1;
			break;
		} else {
			// If digits.length 1 and last number 9
			if (digits.length == 1) {
				digits = [1, 0];
				break;
			} else {
				// Does the array have repeating numbers 9? ex : [5 , 9, 9, 9, 9]
				for (let y = digits.length - 1; y >= 0; y--) {
					if (digits[y] == 9 && y == digits.length - 1) {
						digits[y] = 0;
						digits[y - 1] = digits[y - 1] + 1;
					} else if (digits[y] == 10 && y != 0) {
						digits[y] = 0;
						digits[y - 1] = digits[y - 1] + 1;
					} else if (digits[y] == 10 && y == 0) {
						digits[y] = 0;
						digits.splice(0, 0, 1);
						break;
					} else {
						break;
					}
				}
				break;
			}
		}
	}

	return digits;
}
