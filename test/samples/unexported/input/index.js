/** @import { Options, Result } from './internal' */

/**
 * @param {Options} options
 * @returns {Result}
 */
export function run(options) {
	return { ok: !!options.verbose };
}

export { Helper } from './internal';
