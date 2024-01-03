class ArrayWrapper {
	stringArray: string;
	sumOfArray: number;
	constructor(nums: number[]) {
		this.stringArray = JSON.stringify(nums);
		this.sumOfArray = nums.reduce((a, b) => a + b, 0);
	}

	valueOf(): number {
		return this.sumOfArray;
	}

	toString(): string {
		return this.stringArray;
	}
}
