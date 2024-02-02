type JSONValue =
	| null
	| boolean
	| number
	| string
	| JSONValue[]
	| { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
	let result: Obj[][] = [];
	let temp: Obj[] = [];

	if (size < 1) return result;

	for (let x = 0; x < arr.length; x++) {
		if ((x + 1) % size === 0 || x === arr.length - 1) {
			temp.push(arr[x]);
			result.push(temp);
			temp = [];
		} else {
			temp.push(arr[x]);
		}
	}

	return result;
}
