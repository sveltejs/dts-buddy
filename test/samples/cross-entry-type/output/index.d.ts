declare module 'cross-entry-type/subpkg-a' {
	export class Foo {
		x: number;
		constructor(x: number);
	}
	export function makeFoo(n: number): Foo;

	export {};
}

declare module 'cross-entry-type/subpkg-b' {
	import type { Foo } from 'cross-entry-type/subpkg-a';
	export { makeFoo } from 'cross-entry-type/subpkg-a';
	export function takeFoo(f: Foo): Foo;

	export {};
}

declare module 'cross-entry-type/subpkg-c' {
	export type { Foo } from 'cross-entry-type/subpkg-a';

	export {};
}

//# sourceMappingURL=index.d.ts.map