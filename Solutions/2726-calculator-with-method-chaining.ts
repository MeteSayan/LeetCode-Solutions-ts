class Calculator {
	private _value: number;

	constructor(value: number) {
		this._value = value;
	}

	add(value: number): Calculator {
		this._value += value;
		return this;
	}

	subtract(value: number): Calculator {
		this._value -= value;
		return this;
	}

	multiply(value: number): Calculator {
		this._value *= value;
		return this;
	}

	divide(value: number): Calculator {
		if (value == 0) throw new Error('Division by zero is not allowed');
		this._value /= value;
		return this;
	}

	power(value: number): Calculator {
		this._value **= value;
		return this;
	}

	getResult(): number {
		return this._value;
	}
}
