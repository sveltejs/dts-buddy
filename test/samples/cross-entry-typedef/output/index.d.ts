declare module 'cross-entry-typedef/subpkg-a' {
	export type Foo = Foo_1;
	export function makeFoo(n: number): Foo_1;
	class Foo_1 {
		
		constructor(x: number);
		
		x: number;
	}

	export {};
}

declare module 'cross-entry-typedef/subpkg-b' {
	import type { Foo as Foo_1 } from 'cross-entry-typedef/subpkg-a';
	export { makeFoo } from 'cross-entry-typedef/subpkg-a';
	export function takeFoo(f: Foo): number;
	export type Foo = Foo_1;

	export {};
}

//# sourceMappingURL=index.d.ts.map