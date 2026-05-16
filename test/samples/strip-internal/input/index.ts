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
		this._ = ''
	}
}
