declare module 'cross-entry/subpkg-a' {
	export function makeFoo(n: number): Foo;
	export class Foo {
		
		constructor(x: number);
		
		x: number;
		get value(): number;
	}

	export {};
}

declare module 'cross-entry/subpkg-b' {
	import type { Foo } from 'cross-entry/subpkg-a';
	export function takeFoo(f: Foo): Foo;

	export {};
}

declare module 'cross-entry/subpkg-c' {
	import type { Foo } from 'cross-entry/subpkg-a';
	export { makeFoo } from 'cross-entry/subpkg-a';
	export { takeFoo } from 'cross-entry/subpkg-b';
	export function moreFoo(n: number): Foo;

	export {};
}

//# sourceMappingURL=index.d.ts.map