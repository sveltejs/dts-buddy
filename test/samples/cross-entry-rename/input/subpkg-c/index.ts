import { Foo as FooA } from '../shared-a/types.js';
import { Foo as FooB } from '../shared-b/types.js';

export function takeFooA(f: FooA): FooA {
	return f;
}

export function makeFooB(b: string): FooB {
	return new FooB(b);
}
