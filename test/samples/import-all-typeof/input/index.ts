import * as foo from './foo';

export type Foo = (typeof foo)['handler'];
