import { makeFoo } from '../subpkg-a/index.js';
import { takeFoo } from '../subpkg-b/index.js';

/** @param {number} n */
export function moreFoo(n) {
	const f = makeFoo(n * 2);
	takeFoo(f);
	return f;
}

export { makeFoo, takeFoo };
