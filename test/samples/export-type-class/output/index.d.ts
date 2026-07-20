declare module 'export-type-class' {
	export { Bar, bar } from 'external';
	class Foo {
		x: number;
		constructor(x: number);
	}
	export function foo(n: number): Foo;

	export type { Foo };

	export {};
}

//# sourceMappingURL=index.d.ts.map