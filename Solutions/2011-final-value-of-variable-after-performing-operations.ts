function finalValueAfterOperations(operations: string[]): number {
	let ct = 0;
	for (let x = 0; x < operations.length; x++) {
		operations[x][1] === '+' ? ct++ : ct--;
	}

	return ct;
}
