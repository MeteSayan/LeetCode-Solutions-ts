function subtractProductAndSum(n: number): number {
	let sum = 0;
	let multiply = 1;
	let strNum = n.toString();

	for (let x = 0; x < strNum.length; x++) {
		sum += Number(strNum[x]);
		multiply *= Number(strNum[x]);
	}

	return multiply - sum;
}
