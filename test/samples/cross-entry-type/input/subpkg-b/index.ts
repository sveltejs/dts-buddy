import { Foo, makeFoo } from '../subpkg-a/internal.js';

export function takeFoo(f: Foo): Foo {
	return f;
}

export { makeFoo };
