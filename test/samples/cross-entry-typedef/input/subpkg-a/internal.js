export class Foo {
	/** @type {number} */
	x;

	/** @param {number} x */
	constructor(x) {
		this.x = x;
	}
}

/** @param {number} n */
export function makeFoo(n) {
	return new Foo(n);
}
