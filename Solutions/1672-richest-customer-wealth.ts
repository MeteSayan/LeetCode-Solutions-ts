function maximumWealth(accounts: number[][]): number {
	let calculatedAccounts = accounts.map((account) => {
		return account.reduce((a, b) => a + b);
	});
	return Math.max(...calculatedAccounts);
}
