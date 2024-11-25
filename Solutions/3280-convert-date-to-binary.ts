function convertDateToBinary(date: string): string {
	return date
		.split('-')
		.map((s) => Number(s).toString(2))
		.join('-');
}
