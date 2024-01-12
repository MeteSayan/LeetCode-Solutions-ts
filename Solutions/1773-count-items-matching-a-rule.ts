function countMatches(
	items: string[][],
	ruleKey: string,
	ruleValue: string
): number {
	let ct = 0;
	for (let x = 0; x < items.length; x++) {
		if (ruleKey === 'type' && items[x][0] === ruleValue) ct++;
		else if (ruleKey === 'color' && items[x][1] === ruleValue) ct++;
		else if (ruleKey === 'name' && items[x][2] === ruleValue) ct++;
	}
	return ct;
}
