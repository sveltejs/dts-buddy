export interface Thing {
	value: string;
}

export function isThing(e: Thing | null): e is Thing {
	return e !== null;
}

export { e } from './other';
