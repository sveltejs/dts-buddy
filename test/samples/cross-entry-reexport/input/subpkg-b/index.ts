import { Foo, Bar } from '../shared/types.js';

export function makeFoo(x: number): Foo {
	return new Foo(x);
}

export { Foo } from '../shared/types.js';

export { Bar };

export function wrapBar(id: number): Bar {
	return new Bar(id);
}

export { Baz as Widget } from '../shared/types.js';

import { Box as BoxRenamed } from '../shared/types.js';

export function takeBox(b: BoxRenamed): BoxRenamed {
	return b;
}

export { Box as BoxRenamed } from '../shared/types.js';

import { Qux } from '../shared/types.js';

export function makeQuux(n: number): Qux {
	return new Qux(n);
}
