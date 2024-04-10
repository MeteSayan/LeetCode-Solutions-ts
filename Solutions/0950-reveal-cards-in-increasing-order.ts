function deckRevealedIncreasing(deck: number[]): number[] {
	deck.sort((a, b) => a - b);
	const deque: number[] = [];
	for (let i = deck.length - 1; i >= 0; --i) {
		if (deque.length > 0) {
			deque.unshift(deque.pop() as number);
		}
		deque.unshift(deck[i]);
	}
	return deque;
}
