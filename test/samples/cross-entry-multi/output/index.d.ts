declare module 'cross-entry-multi/subpkg-a' {
	export class Foo {
		x: number;
		constructor(x: number);
	}

	export {};
}

declare module 'cross-entry-multi/subpkg-b' {
	export class Bar {
		y: string;
		constructor(y: string);
	}

	export {};
}

declare module 'cross-entry-multi/subpkg-c' {
	import type { Bar } from 'cross-entry-multi/subpkg-b';
	export function makeBar(y: string): Bar;

	export {};
}

//# sourceMappingURL=index.d.ts.map