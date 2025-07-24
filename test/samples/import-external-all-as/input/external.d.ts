declare module 'all-as-external' {
	export type BaseType<T> = {
		type: T;
	};

	export function string(): BaseType<string>;

	export type Infer<T extends BaseType<any>> = T extends BaseType<infer U> ? U : never;
}
