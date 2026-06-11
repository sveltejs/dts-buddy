declare module 'type-predicate' {
	export interface Thing {
		value: string;
	}
	export function isThing(e: Thing | null): e is Thing;
	export function e(): boolean;

	export {};
}

//# sourceMappingURL=index.d.ts.map