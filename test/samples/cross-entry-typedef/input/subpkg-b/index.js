export { makeFoo } from '../subpkg-a/index.js';

/** @typedef {import('../subpkg-a/index.js').Foo} Foo */

/** @param {Foo} f */
export function takeFoo(f) {
	return f.x;
}
