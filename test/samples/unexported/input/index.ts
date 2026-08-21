import type { Options, Result } from './internal';

export function run(options: Options): Result {
	return { ok: !!options.verbose };
}

export type { Helper } from './internal';
