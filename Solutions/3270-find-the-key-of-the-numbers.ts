function generateKey(num1: number, num2: number, num3: number): number {
	const str1: string = String(num1).padStart(4, '0');
	const str2: string = String(num2).padStart(4, '0');
	const str3: string = String(num3).padStart(4, '0');

	const res: (string | undefined)[] = Array(4).fill(undefined);

	for (let x = 0; x < 4; x++) {
		res[x] = String(
			Math.min(Number(str1[x]), Number(str2[x]), Number(str3[x]))
		);
	}

	return Number(res.join(''));
}
