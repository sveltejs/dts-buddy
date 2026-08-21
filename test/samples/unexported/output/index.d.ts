declare module 'unexported' {
	export function run(options: Options): Result;
	interface Options {
		verbose?: boolean;
	}

	interface Result {
		ok: boolean;
	}

	export type Helper = string;

	export {};
}

//# sourceMappingURL=index.d.ts.map