export class Foo {
	/** @type {number | undefined} */
	foo;

	bar = '';

	/**
	 * @internal
	 * @type {number | undefined}
	 */
	_foo;

	/**
	 * @internal
	 * @type {string | undefined}
	 */
	_bar;

	/** @param {number} baz */
	constructor(baz) {
		/** @internal */
		this._ = '';

		this.baz = baz;
	}

	/** @internal */
	get _baz() {
		return this._;
	}

	/**
	 * @internal
	 * @param {string | undefined} b
	 */
	set _baz(b) {
		// @ts-ignore
		this._ = b;
	}
}
