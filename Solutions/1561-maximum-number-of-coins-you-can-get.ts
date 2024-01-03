function maxCoins(piles: number[]): number {
	piles.sort((a, b) => a - b);
	let ct = 0;

	for (let i = piles.length - 2; i >= piles.length / 3; i -= 2) {
		ct += piles[i];
	}

	return ct;
}

//  Solution 2
// function maxCoins(piles: number[]): number {
// 	piles.sort((a, b) => a - b);
// 	let ct = 0;
// 	while (piles.length !== 0) {
// 		piles.pop();
// 		ct += piles.pop() as number;
// 		piles.shift();
// 	}
// 	return ct;
// }
