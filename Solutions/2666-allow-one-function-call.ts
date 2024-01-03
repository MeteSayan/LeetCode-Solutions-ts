type JSONValue =
	| null
	| boolean
	| number
	| string
	| JSONValue[]
	| { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
	let ct = 1;
	return function (...args) {
		if (ct == 2) return;
		ct++;
		return fn(...args);
	};
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
