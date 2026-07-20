declare module 'cross-entry-rename/subpkg-a' {
	export class Foo {
		a: number;
		constructor(a: number);
	}

	export {};
}

declare module 'cross-entry-rename/subpkg-b' {
	import type { Foo as Foo_1 } from 'cross-entry-rename/subpkg-a';
	export class Foo {
		b: number;
		constructor(b: number);
	}
	export function wrap(f: Foo_1): Foo;

	export {};
}

declare module 'cross-entry-rename/subpkg-c' {
	import type { Foo } from 'cross-entry-rename/subpkg-a';
	export function takeFooA(f: Foo): Foo;
	export function makeFooB(b: string): Foo_1;
	class Foo_1 {
		b: string;
		constructor(b: string);
	}

	export {};
}

//# sourceMappingURL=index.d.ts.map