function findArray(pref: number[]): number[] {
	let result: number[] = [pref[0]];

	for (let x = 1; x < pref.length; x++) {
		result.push(pref[x] ^ pref[x - 1]);
	}

	return result;
}
