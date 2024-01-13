class OrderedStream {
	stream: string[];
	pointer: number;

	constructor(n: number) {
		this.stream = new Array(n).fill('');
		this.pointer = 0;
	}

	insert(idKey: number, value: string): string[] {
		this.stream[idKey - 1] = value;

		const arr: string[] = [];

		while (this.stream[this.pointer]) {
			arr.push(this.stream[this.pointer]);
			this.pointer++;
		}

		return arr;
	}
}
