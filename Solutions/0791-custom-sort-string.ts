function customSortString(order: string, s: string): string {
	const orderMap = new Map<string, number>();

	for (let i = 0; i < order.length; i++) {
		orderMap.set(order[i], i);
	}

	return s
		.split('')
		.sort((a, b) => {
			const aIndex = orderMap.get(a) ?? -1;
			const bIndex = orderMap.get(b) ?? -1;
			return aIndex - bIndex;
		})
		.join('');
}
