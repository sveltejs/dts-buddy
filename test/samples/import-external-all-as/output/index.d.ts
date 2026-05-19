declare module 'import-external-all-as' {
	import * as v from 'all-as-external';
	export const Schema: v.BaseType<string>;
	export type Test = v.Infer<typeof Schema>;

	export {};
}

//# sourceMappingURL=index.d.ts.map