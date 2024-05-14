function totalMoney(n: number): number {
	let money = 0;
	let day = 1;
	let week = 0;

	for (let x = 1; x <= n; x++) {
		money = money + (week + day);
		day++;

		if (x % 7 === 0) {
			week++;
			day = 1;
		}
	}

	return money;
}
