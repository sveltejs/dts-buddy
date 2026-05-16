export { Foo } from './others';

/** @internal TS itself will take care of stripping this */
export interface TSdddd {
	foo: boolean;
}

export class FooBar {
	foo: number | undefined;

	/** @internal */
	_foo: number | undefined;

	bar = '';

	/** @internal */
	_bar: string | undefined;

	constructor() {
		/** @internal */
		// @ts-ignore
		this._ = '';
	}

	/** @internal */
	get _baz() {
		// @ts-ignore
		return this._;
	}

	/** @internal * */
	set _baz(b: string | undefined) {
		// @ts-ignore
		this._ = b;
	}
}
