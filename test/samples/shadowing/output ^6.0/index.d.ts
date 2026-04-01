declare module 'shadowing' {
	class MyMap extends Map<any, any> {
		constructor();
		constructor(entries?: readonly (readonly [any, any])[] | null | undefined);
		constructor();
		constructor(iterable?: Iterable<readonly [any, any]> | null | undefined);
	}

	export { MyMap as Map };
}

//# sourceMappingURL=index.d.ts.map