function decode(encoded: number[], first: number): number[] {
	const result: number[] = [first];

	for (let x = 0; x < encoded.length; x++) {
		result.push(encoded[x] ^ result[x]);
	}

	return result;
}
