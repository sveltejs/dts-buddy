declare module 'cross-entry-reexport/subpkg-a' {
	export class Foo {
		x: number;
		constructor(x: number);
	}
	export class Bar {
		id: number;
		constructor(id: number);
	}
	export class Widget {
		name: string;
		constructor(name: string);
	}
	export class Box {
		value: string;
		constructor(value: string);
	}
	export class Quux {
		n: number;
		constructor(n: number);
	}

	export {};
}

declare module 'cross-entry-reexport/subpkg-b' {
	import type { Foo, Bar, Box as BoxRenamed, Quux } from 'cross-entry-reexport/subpkg-a';
	export { Bar, Foo, Widget, Box as BoxRenamed } from 'cross-entry-reexport/subpkg-a';
	export function makeFoo(x: number): Foo;
	export function wrapBar(id: number): Bar;
	export function takeBox(b: BoxRenamed): BoxRenamed;
	export function makeQuux(n: number): Quux;

	export {};
}

//# sourceMappingURL=index.d.ts.map
