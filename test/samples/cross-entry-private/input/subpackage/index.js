/**
 * @param {import('../shared/foo.js').Foo} f
 */
export function takeFoo(f) {
	return f;
}

import { Bar } from '../shared/foo.js';

/** @param {number} n */
export function makeBar(n) {
	return new Bar(n);
}
