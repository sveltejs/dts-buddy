export class Foo {
	x: number;

	constructor(x: number) {
		this.x = x;
	}
}

export function foo(n: number): Foo {
	return new Foo(n);
}
