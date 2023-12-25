// Solution 1
function numJewelsInStones(jewels: string, stones: string): number {
	let ct = 0;
	for (let i = 0; i < stones.length; i++) {
		if (jewels.includes(stones[i])) {
			ct++;
		}
	}
	return ct;
}

// Solution 2 - Using a hash table - Change the function name to numJewelsInStones
function numJewelsInStonesTwo(jewels: string, stones: string): number {
	let obj: Record<string, string> = {};
	let ct = 0;

	for (let i = 0; i < jewels.length; i++) {
		obj[jewels[i]] = jewels[i];
	}

	for (let j = 0; j < stones.length; j++) {
		if (stones[j] in obj) ct++;
	}
	return ct;
}
